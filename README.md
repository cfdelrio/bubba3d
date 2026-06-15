# Hello Bubba 3D

Landing page del emprendimiento de juguetes impresos en 3D de África, diseñada y desarrollada con Next.js.

🌐 **[hello.bubba3d.com.ar](https://hello.bubba3d.com.ar)**

---

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS 4**
- **TypeScript**
- Deploy en **AWS Amplify** con CI/CD via GitHub Actions

## Secciones

- Hero con ilustraciones SVG animadas
- Catálogo de productos con 5 juguetes destacados
- Cómo funciona (4 pasos)
- Nuestra historia (fundadora África)
- Personalizados → WhatsApp
- Footer con Instagram y WhatsApp

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy

Cada push a `main` dispara el CI/CD:
1. GitHub Actions verifica tipos TypeScript
2. AWS Amplify construye y despliega automáticamente
