# Google Search Console — Setup para Bubba3D

Fecha: 2026-10-12  
Sitio: `https://www.bubba3d.com.ar`

---

## Opción recomendada: propiedad de dominio

La **propiedad de dominio** (`bubba3d.com.ar`) cubre automáticamente todas las variantes:
- `https://www.bubba3d.com.ar`
- `https://bubba3d.com.ar`
- `https://hello.bubba3d.com.ar`
- HTTP y HTTPS

Requiere agregar un registro TXT en el DNS del dominio.

---

## Opción alternativa: propiedad URL-prefix

Si no tenés acceso al DNS, podés verificar con URL-prefix:
- Propiedad: `https://www.bubba3d.com.ar`
- Verificación: meta tag HTML o archivo HTML en la raíz

---

## Paso a paso: propiedad de dominio (recomendada)

### 1. Entrar a Google Search Console

Ir a: https://search.google.com/search-console

Iniciar sesión con la cuenta de Google que vas a usar para administrar el sitio.

### 2. Agregar propiedad de dominio

En la pantalla de inicio (o menú lateral → "Agregar propiedad"):

- Elegir **"Dominio"**
- Ingresar: `bubba3d.com.ar` (sin `www`, sin `https://`)
- Click en **Continuar**

### 3. Copiar el TXT de verificación

Search Console va a mostrar un registro de este formato:

```
google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Copiarlo completo. Es único para tu cuenta.

### 4. Agregar el TXT en el DNS

Ir al panel DNS del registrar donde está registrado `bubba3d.com.ar`.

Agregar un nuevo registro:

| Campo | Valor |
|---|---|
| Tipo | `TXT` |
| Host / Nombre | `@` (o `bubba3d.com.ar` según el panel) |
| Valor | `google-site-verification=XXXX...` (el token de Search Console) |
| TTL | 3600 (1 hora) o el default |

**Nota**: los cambios de DNS pueden tardar entre 5 minutos y 48 horas en propagarse.

### 5. Verificar propiedad

Volver a Search Console y hacer click en **Verificar**.

Si el TXT ya propagó, la propiedad queda verificada inmediatamente.  
Si no, esperar unos minutos y reintentar.

### 6. Enviar sitemap

Una vez verificada la propiedad:

1. En el menú izquierdo → **Sitemaps**
2. En el campo "Agregar un nuevo sitemap", ingresar:
   ```
   https://www.bubba3d.com.ar/sitemap.xml
   ```
3. Click en **Enviar**

Estado esperado: "Éxito" y cantidad de URLs encontradas (al menos 2).

### 7. Inspeccionar URLs prioritarias

En el menú izquierdo → **Inspección de URL**:

Inspeccionar estas URLs y solicitar indexación si no están indexadas:

1. `https://www.bubba3d.com.ar/`
2. `https://www.bubba3d.com.ar/impresion-3d-personalizada`

Para cada una:
- Ingresar la URL en el campo de arriba
- Click en **Probar URL en vivo** (para confirmar que Google puede renderizarla)
- Si dice "URL no está en Google" → click en **Solicitar indexación**

---

## Primeras semanas: qué revisar

Google tarda entre 1 y 4 semanas en procesar las primeras impresiones. Las métricas aparecen en Search Console gradualmente.

### Panel "Rendimiento" → métricas a monitorear

| Métrica | Qué observar |
|---|---|
| **Impresiones** | Aumentan conforme Google indexa el sitio |
| **Clics** | Primeras visitas orgánicas |
| **CTR** | Click-through rate; bajo al inicio (< 5%) es normal |
| **Posición media** | Posición promedio en resultados; esperar > 20 al inicio |

### Panel "Cobertura" → errores de indexación

Revisar semanalmente:
- **Páginas indexadas**: deben aparecer `/` y `/impresion-3d-personalizada`
- **Errores**: 404, errores de servidor, bloqueos por robots.txt
- **Páginas excluidas**: verificar que no haya duplicados no deseados

### Panel "Experiencia" → Core Web Vitals

Aparece con volumen de datos suficiente (semanas o meses).  
Métricas: LCP, FID/INP, CLS. Amplify + Next.js SSG tiende a rendir bien.

### Consultas de búsqueda a monitorear

Filtrar por estas consultas en el panel de Rendimiento:

- `juguetes impresos en 3D`
- `juguetes 3D Argentina`
- `juguetes personalizados Argentina`
- `impresión 3D personalizada`
- `regalos personalizados 3D`

---

## Notas técnicas

- El canonical correcto (`https://www.bubba3d.com.ar`) ya está configurado en el código.
- Los redirects 308 de apex (`bubba3d.com.ar`) y `hello.bubba3d.com.ar` → `www` ya están activos.
- El sitemap está en `https://www.bubba3d.com.ar/sitemap.xml` y cubre las 2 URLs principales.
- `robots.txt` permite todo y referencia el sitemap.

No se requieren cambios de código adicionales para la verificación de Search Console.
