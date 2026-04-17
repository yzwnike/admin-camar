// /app/api/upload/route.ts
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file');
  const folder = searchParams.get('folder'); // 'Materiales', 'Noticias' o 'Proyectos'

  if (!fileName || !folder) {
    return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
  }

  // Configuración de Bunny (Asegúrate de tenerlos en .env.local)
  const storageZone = process.env.BUNNY_STORAGE_ZONE || 'lanzadera-digital';
  const accessKey = process.env.BUNNY_ACCESS_KEY || '33209c0d-1c2b-4041-9863e629e9f9-211f-4c73';
  
  // RUTA FINAL: /lanzadera-digital/camar.es/Carpeta/archivo.webp
  const bunnyUrl = `https://storage.bunnycdn.com/${storageZone}/camar.es/${folder}/${fileName}`;

  try {
    const arrayBuffer = await request.arrayBuffer();

    const response = await fetch(bunnyUrl, {
      method: 'PUT',
      headers: {
        'AccessKey': accessKey,
        'Content-Type': 'application/octet-stream',
      },
      body: Buffer.from(arrayBuffer),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, fileName });
    } else {
      const errorMsg = await response.text();
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}