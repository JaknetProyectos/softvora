import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      mensaje,
      servicioDeseado,
      presupuesto,
      asunto,
    } = body;

    // =========================
    // EMAIL AL CLIENTE
    // =========================

    await resend.emails.send({
      from: "Softvora <gestion@softvora.com>",
      to: [email],
      subject: "Hemos recibido tu solicitud",
      html: `
        <div style="background:#09090b;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">
          <div style="max-width:700px;margin:auto;background:#18181b;border:1px solid #27272a;border-radius:24px;overflow:hidden;">

            <div style="background:linear-gradient(135deg,#f59e0b,#ea580c);padding:50px 40px;text-align:center;">
              <h1 style="margin:0;font-size:34px;font-weight:800;color:white;">
                Softvora
              </h1>

              <p style="margin-top:12px;font-size:16px;color:#ffedd5;">
                Soluciones tecnológicas premium
              </p>
            </div>

            <div style="padding:40px;">
              <h2 style="font-size:28px;margin-bottom:12px;color:#ffffff;">
                Gracias por contactarnos
              </h2>

              <p style="font-size:16px;line-height:1.8;color:#d4d4d8;">
                Hola <strong>${nombre}</strong>, hemos recibido correctamente tu solicitud.
                Nuestro equipo revisará tu mensaje y te contactaremos lo antes posible.
              </p>

              <div style="margin-top:30px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <p style="margin:0 0 12px 0;color:#a1a1aa;font-size:14px;">
                  Asunto
                </p>

                <p style="margin:0;font-size:20px;font-weight:700;color:#f59e0b;">
                  ${asunto}
                </p>

              </div>

              ${
                servicioDeseado
                  ? `
                <div style="margin-top:20px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                  
                  <p style="margin:0 0 12px 0;color:#a1a1aa;font-size:14px;">
                    Servicio solicitado
                  </p>

                  <p style="margin:0;font-size:18px;color:#ffffff;">
                    ${servicioDeseado}
                  </p>

                </div>
              `
                  : ""
              }

              ${
                presupuesto
                  ? `
                <div style="margin-top:20px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                  
                  <p style="margin:0 0 12px 0;color:#a1a1aa;font-size:14px;">
                    Presupuesto estimado
                  </p>

                  <p style="margin:0;font-size:18px;font-weight:700;color:#f59e0b;">
                    ${presupuesto}
                  </p>

                </div>
              `
                  : ""
              }

              <div style="margin-top:20px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <p style="margin:0 0 12px 0;color:#a1a1aa;font-size:14px;">
                  Mensaje enviado
                </p>

                <p style="margin:0;font-size:16px;line-height:1.8;color:#d4d4d8;">
                  ${mensaje}
                </p>

              </div>

              <div style="margin-top:40px;text-align:center;">
                <a
                  href="https://softvora.com"
                  style="display:inline-block;padding:16px 28px;background:linear-gradient(135deg,#f59e0b,#ea580c);color:white;text-decoration:none;border-radius:14px;font-weight:700;"
                >
                  Visitar softvora.com
                </a>
              </div>
            </div>

            <div style="padding:30px;text-align:center;border-top:1px solid #27272a;color:#71717a;font-size:13px;">
              © ${new Date().getFullYear()} softvora.com
            </div>

          </div>
        </div>
      `,
    });

    // =========================
    // EMAIL AL NEGOCIO
    // =========================

    await resend.emails.send({
      from: "Formulario Web <gestion@softvora.com>",
      to: ["ventas@softvora.com"],
      subject: `Nuevo contacto recibido - ${asunto}`,
      html: `
        <div style="background:#09090b;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">
          <div style="max-width:800px;margin:auto;background:#18181b;border:1px solid #27272a;border-radius:24px;overflow:hidden;">

            <div style="background:linear-gradient(135deg,#f59e0b,#ea580c);padding:40px;">
              <h1 style="margin:0;font-size:30px;font-weight:800;color:white;">
                Nuevo Contacto Web
              </h1>

              <p style="margin-top:10px;color:#ffedd5;">
                softvora.com
              </p>
            </div>

            <div style="padding:40px;">

              <div style="background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <h2 style="margin-top:0;color:#f59e0b;">
                  Información del cliente
                </h2>

                <p style="color:#d4d4d8;">
                  <strong>Nombre:</strong> ${nombre}
                </p>

                <p style="color:#d4d4d8;">
                  <strong>Correo:</strong> ${email}
                </p>

                ${
                  telefono
                    ? `
                  <p style="color:#d4d4d8;">
                    <strong>Teléfono:</strong> ${telefono}
                  </p>
                `
                    : ""
                }

                <p style="color:#d4d4d8;">
                  <strong>Asunto:</strong> ${asunto}
                </p>

                ${
                  servicioDeseado
                    ? `
                  <p style="color:#d4d4d8;">
                    <strong>Servicio deseado:</strong> ${servicioDeseado}
                  </p>
                `
                    : ""
                }

                ${
                  presupuesto
                    ? `
                  <p style="color:#d4d4d8;">
                    <strong>Presupuesto:</strong> ${presupuesto}
                  </p>
                `
                    : ""
                }

              </div>

              <div style="margin-top:30px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <h2 style="margin-top:0;color:#f59e0b;">
                  Mensaje
                </h2>

                <p style="font-size:16px;line-height:1.8;color:#d4d4d8;white-space:pre-line;">
                  ${mensaje}
                </p>

              </div>

            </div>

            <div style="padding:30px;text-align:center;border-top:1px solid #27272a;color:#71717a;font-size:13px;">
              Sistema automático de contacto · softvora.com
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Correos enviados correctamente",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error enviando correos",
      },
      {
        status: 500,
      }
    );
  }
}