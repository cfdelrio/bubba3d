# Bubba3D × ORK3D — Estrategia SEO y arquitectura de contenidos

Fecha: 2026-10-12
Alcance: `bubba3d.com.ar` / `ork3d.com`
Estado: **AUDITORÍA COMPLETADA — pendiente aprobación para implementar**

---

## 1. Posicionamiento de cada marca

### Hello Bubba 3D (`www.bubba3d.com.ar`)
**Territorio**: juguetes, objetos lúdicos, figuras, regalos personalizados, imaginación, infancia.
**Audiencia**: consumidor final — padres, regaladores, personas que quieren algo único.
**Diferencial**: hecho a pedido, colores a elección, diseños propios, emprendimiento familiar argentino.
**Tono**: cálido, lúdico, personal, artesanal.

### ORK3D (`ork3d.com`)
**Territorio**: trofeos, medallas, reconocimientos, torneos, empresas, eventos, identidad corporativa.
**Audiencia**: B2B y organizadores — clubes, empresas, organizadores de torneos.
**Diferencial**: diseño e identidad, no tecnología. Objetos que comunican identidad.
**Tono**: profesional, directo, sin florituras.

---

## 2. Keywords de cada marca

### Hello Bubba 3D — keywords objetivo
- juguetes impresos en 3D
- juguetes 3D Argentina
- juguetes personalizados Argentina
- figuras impresas en 3D
- objetos personalizados en 3D
- regalos personalizados 3D
- impresión 3D para regalos
- impresión 3D personalizada
- juguetes personalizados para niños
- juguetes hechos a pedido Argentina
- figuras 3D personalizadas
- regalo original para niños Argentina

### ORK3D — keywords objetivo (NO usar en Bubba)
- trofeos personalizados
- medallas personalizadas
- premios para torneos
- reconocimientos empresariales
- regalos empresariales
- premios corporativos
- trofeos Buenos Aires
- medallas deportivas
- premios para eventos
- trofeos 3D

### Keywords compartidas (tecnología) — uso cuidadoso
- impresión 3D Buenos Aires
- impresión 3D Argentina
Estas pueden aparecer en Bubba solo si el contexto es claramente de juguetes/regalos para consumidor.

---

## 3. Auditoría técnica — estado actual de Bubba3D

### Stack
| Elemento | Valor |
|---|---|
| Framework | Next.js (latest, App Router) |
| Lenguaje | TypeScript |
| CSS | Tailwind CSS v4 |
| Font | Nunito (Google Fonts, display:swap) |
| Hosting | AWS Amplify (SSR) |
| Lead capture | WhatsApp exclusivamente |
| Analytics | **No hay analytics instalado** |

### Rutas existentes
| Ruta | Archivo | Estado |
|---|---|---|
| `/` | `src/app/page.tsx` | Única página |
| `/robots.txt` | **no existe** | ⚠️ Falta |
| `/sitemap.xml` | **no existe** | ⚠️ Falta |
| `/impresion-3d-personalizada` | **no existe** | Recomendado crear |

### Secciones del home (`page.tsx`)
| Sección | ID | Componente |
|---|---|---|
| Hero | — | `Hero.tsx` |
| Catálogo | `#catalogo` | `FeaturedCatalog.tsx` |
| Cómo funciona | `#como-funciona` | `HowItWorks.tsx` |
| Sobre nosotros | `#nosotros` | `FounderSection.tsx` |
| Personalizados | `#personalizados` | `CustomSection.tsx` |
| Footer | — | `Footer.tsx` |

---

## 4. Problemas SEO encontrados

### Críticos

#### C1 — Sin canonical tag
**Archivo**: `src/app/layout.tsx`
**Problema**: El objeto `Metadata` no incluye `alternates.canonical`.
Sin canonical, Google puede indexar las siguientes variantes como páginas distintas:
- `https://www.bubba3d.com.ar/`
- `https://bubba3d.com.ar/`
- `https://hello.bubba3d.com.ar/` (posible subdomain de Amplify — ver C2)
- `https://main.d1234xxxx.amplifyapp.com/` (URL por defecto de Amplify)
**Riesgo**: duplicate content severo, dilución de autoridad.
**Solución**: agregar `alternates: { canonical: 'https://www.bubba3d.com.ar' }` en Metadata.

#### C2 — Posible subdominio `hello.bubba3d.com.ar`
**Problema**: El nombre de la marca en UI es "Hello Bubba 3D". Es posible que exista un custom domain en Amplify configurado como `hello.bubba3d.com.ar` sirviendo el mismo contenido.
**Riesgo**: si existe y sirve el mismo HTML sin redirect, hay dos versiones indexables del sitio.
**Acción**: verificar en Amplify Console → App settings → Custom domains. Si existe, configurar redirect 301 a `https://www.bubba3d.com.ar`.
**Nota**: este redirect NO se puede hacer desde código Next.js — requiere configuración en Amplify Console.

#### C3 — Sin sitemap.xml
**Problema**: Google no tiene un mapa crawlable del sitio.
**Solución**: crear `src/app/sitemap.ts` (Next.js genera `/sitemap.xml` automáticamente).

#### C4 — Sin robots.txt
**Problema**: sin instrucciones para crawlers. El default de Next.js permite todo, pero sin referencia al sitemap.
**Solución**: crear `src/app/robots.ts`.

### Importantes

#### I1 — OG incompleto
**Archivo**: `src/app/layout.tsx`
```ts
// Actual
openGraph: {
  title: 'Hello Bubba 3D',
  description: '...',
  locale: 'es_AR',
  type: 'website',
}
// Falta: url, images, siteName
```
Sin `og:url`, los compartidos en redes sociales pueden tener URL incorrecta.
Sin `og:image`, la mayoría de plataformas no muestra preview visual.

#### I2 — Sin Twitter Card
**Problema**: no hay `twitter:card` en metadata.
Sin esto, Twitter/X no genera preview al compartir.

#### I3 — Sin JSON-LD / Schema.org
**Problema**: no hay datos estructurados.
Oportunidades perdidas:
- `Organization` — entidad de marca
- `WebSite` — sitelinks search box potential
- `Product` — productos del catálogo
- `FAQPage` — no hay FAQ, pero se puede crear

#### I4 — Title SEO subóptimo
**Actual**: `Hello Bubba 3D — Juguetes impresos en 3D hechos para imaginar`
**Problema**: "Hello Bubba 3D" como brand name al inicio ocupa espacio antes del keyword principal. La marca en el dominio es "bubba3d" pero el display name tiene "Hello".
**Propuesta**: `Juguetes impresos en 3D personalizados | Bubba3D Argentina`

#### I5 — Sin cross-link a ORK3D
**Problema**: no hay ninguna referencia a ORK3D en el sitio.
Oportunidad de señal semántica y link interno entre marcas del mismo operador.

#### I6 — Meta keywords (menor)
**Problema**: el campo `keywords` en Metadata de Next.js genera `<meta name="keywords">`. Google lo ignora y puede parecer ruido. No es crítico pero se puede limpiar.

### Menores

#### M1 — HowItWorks paso 3: "Lo imprimimos en 3D"
A diferencia de ORK3D, en Bubba el proceso de impresión 3D ES parte del producto para el consumidor. Este texto es aceptable y comunica el diferencial artesanal. **No requiere cambio.**

#### M2 — `africa.jpg` en `/public`
La imagen de la fundadora está en `/public` directamente. Funciona pero la Next.js `Image` component la sirve con caché. Sin embargo, si no tiene alt text en el build estático, puede afectar accesibilidad. En el código el alt está correcto: `"África, fundadora de Hello Bubba 3D"`. **OK.**

#### M3 — No hay FAQPage
La sección FAQ no existe. Para SEO es recomendable agregar preguntas frecuentes con JSON-LD. **Backlog, no urgente.**

---

## 5. Estado de canonicalización

| Variante | Estado esperado | Estado actual (estimado) |
|---|---|---|
| `https://www.bubba3d.com.ar/` | **Canónico** | Sin canonical declarado |
| `https://bubba3d.com.ar/` | Debe redirigir 301 → www | Depende de Amplify Console |
| `https://hello.bubba3d.com.ar/` | Verificar si existe; si existe, 301 → www | Desconocido |
| `https://*.amplifyapp.com/` | Default Amplify; canonicalize con tag | Sin canonical |

**Acción manual requerida** (fuera del código):
1. En Amplify Console → Custom domains → configurar que `bubba3d.com.ar` (apex) redirija 301 a `www.bubba3d.com.ar`.
2. Verificar si existe `hello.bubba3d.com.ar`; si sirve el mismo contenido, configurar redirect 301.
3. La URL de Amplify (`*.amplifyapp.com`) queda sin indexar gracias al canonical tag en el código.

---

## 6. Arquitectura recomendada

### Navegación actual
```
Catálogo · Cómo funciona · Sobre África · Personalizados
```

### Navegación recomendada
```
Catálogo · Personalizados · Cómo funciona · Preguntas frecuentes · Contacto
```
- Subir "Personalizados" — es diferencial clave
- Agregar "Preguntas frecuentes" cuando se cree esa sección
- "Sobre África" renombrar a "Nuestra historia" o mantener — no urgente

### Rutas a crear (priorizado)
| Ruta | Prioridad | Justificación |
|---|---|---|
| `/robots.txt` | Alta | SEO básico |
| `/sitemap.xml` | Alta | Crawlabilidad |
| `/impresion-3d-personalizada` | Media | Captura long-tail |
| FAQ en home | Baja | Rich snippets |

---

## 7. Estrategia de cross-linking Bubba → ORK3D

### Ubicación: Footer (sección nueva)
```
¿Buscás trofeos, premios o piezas para empresas y eventos?
Conocé ORK3D, nuestro espacio dedicado a trofeos, reconocimientos
y objetos personalizados para torneos, empresas y eventos.

[Trofeos y reconocimientos en ORK3D →]
```
- Enlace: `<a href="https://ork3d.com" rel="noopener">trofeos y reconocimientos personalizados en ORK3D</a>`
- El enlace debe ser crawlable (no `rel="nofollow"`)
- No agregar en header ni en hero

### NO hacer
- No mencionar ORK3D en la navegación principal
- No usar "trofeos" o "medallas" como keywords en páginas de Bubba
- No poner logo de ORK3D en Bubba

---

## 8. Archivos que se propone modificar

| Archivo | Cambio | Fase |
|---|---|---|
| `src/app/layout.tsx` | metadata: canonical, OG completo, Twitter card, JSON-LD, title | F2+F3+F9+F10 |
| `src/components/Footer.tsx` | agregar bloque de cross-link a ORK3D | F5 |
| `src/app/robots.ts` | crear | F2 |
| `src/app/sitemap.ts` | crear | F2 |
| `src/app/impresion-3d-personalizada/page.tsx` | crear (landing SEO) | F7 |
| `src/lib/analytics.ts` | crear stub de tracking para outbound link | F13 |

**NO se propone modificar:**
- Ningún archivo de ORK3D
- La identidad visual de Bubba (colores, tipografía, ilustraciones)
- El H1 del hero (es excelente)
- La estructura de componentes
- La lógica de WhatsApp

---

## 9. Riesgos

| Riesgo | Nivel | Mitigación |
|---|---|---|
| Canonicalización de `hello.bubba3d.com.ar` no es controlable desde código | Alto | Verificar en Amplify Console; si no existe, el canonical tag en código es suficiente |
| El redirect apex→www requiere Amplify Console | Medio | Documentar como paso manual; el canonical cubre el caso hasta que se configure |
| Crear `/impresion-3d-personalizada` con poco contenido → thin content penalización | Medio | Solo crear si se escribe contenido real de al menos 400 palabras con valor informativo |
| Cross-link a ORK3D no debe transferir señal negativa | Bajo | Usar anchor text descriptivo, no `nofollow`, contexto claro |

---

## 10. Plan de implementación (Entregable 2)

### Paso 1 — Canonicalización y metadata (no destructivo)
1. `src/app/layout.tsx`: agregar `alternates.canonical`, OG completo, Twitter card, JSON-LD Organization + WebSite
2. `src/app/robots.ts`: crear
3. `src/app/sitemap.ts`: crear
4. Verificar build `next build` sin errores

### Paso 2 — Cross-link ORK3D
5. `src/components/Footer.tsx`: agregar bloque contextual Bubba → ORK3D
6. Agregar evento analytics outbound (`click_ork3d`) — solo si se puede usar console.debug como stub sin instalar herramientas nuevas

### Paso 3 — Landing `/impresion-3d-personalizada`
7. Crear ruta, escribir contenido real, agregar a sitemap
8. Agregar link en navegación o footer cuando esté lista

### Paso 4 — Pasos manuales (Amplify Console)
- Configurar redirect `bubba3d.com.ar` → `https://www.bubba3d.com.ar`
- Verificar si existe `hello.bubba3d.com.ar` y si es así, configurar redirect

---

## 11. Backlog de contenido SEO futuro

| Contenido | Keyword objetivo | Prioridad |
|---|---|---|
| FAQ en home | — | Alta (rich snippets) |
| `/impresion-3d-personalizada` | impresión 3D personalizada para consumidor | Alta |
| Blog/nota: "Cómo se hace un juguete impreso en 3D" | cómo se fabrica un juguete impreso en 3D | Media |
| Blog/nota: "Materiales seguros para juguetes 3D" | materiales juguetes 3D seguros | Media |
| Blog/nota: "Regalos originales para niños" | regalos originales para niños Argentina | Media |
| Blog/nota: "Figuras personalizadas en 3D" | figuras personalizadas 3D | Baja |
| Blog/nota: "Ideas de regalos impresos en 3D" | regalos impresos en 3D | Baja |

---

## 12. Verificación — protección de ORK3D

Revisado el código de Bubba3D en su estado actual:
- **No hay ninguna mención de**: trofeos, medallas, premios deportivos, reconocimientos empresariales, regalos corporativos, eventos empresariales.
- **Los productos son todos juguetes**: Dino, Torre arcoíris, Pulpo, Camioncito, Cohete espacial.
- **El H1 es**: "Juguetes impresos en 3D hechos para imaginar" — no compite con ORK3D.
- **No hay páginas de empresas o torneos**.
- **Estado**: ✅ Sin colisión actual con keywords de ORK3D.

---

## 13. Metadata propuesta

### Home (`/`)

```
title: "Juguetes impresos en 3D personalizados | Bubba3D Argentina"
description: "Juguetes y objetos impresos en 3D, diseñados y fabricados en Argentina. Piezas personalizadas, regalos y productos hechos a pedido con los colores y detalles que querés."
canonical: "https://www.bubba3d.com.ar/"
og:title: "Juguetes impresos en 3D personalizados | Bubba3D"
og:description: "Diseñamos y fabricamos juguetes y objetos personalizados, hechos a pedido en Argentina."
og:url: "https://www.bubba3d.com.ar/"
og:image: "https://www.bubba3d.com.ar/og-cover.png" (a crear)
og:locale: "es_AR"
twitter:card: "summary_large_image"
```

### `/impresion-3d-personalizada` (cuando se cree)

```
title: "Impresión 3D personalizada para juguetes y regalos | Bubba3D Argentina"
description: "Impresión 3D de juguetes, figuras y objetos personalizados hechos a pedido. Elegís colores, tamaños y detalles. Diseñados y fabricados en Argentina."
canonical: "https://www.bubba3d.com.ar/impresion-3d-personalizada"
```
