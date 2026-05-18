import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderId,
      customer,
      items,
      subtotal,
      iva,
      total,
    } = body;

    const customerName = `${customer.firstName} ${customer.lastName}`;

    const itemsHtml = items
      .map(
        (item: any) => `
          <tr>
            <td style="padding: 14px; border-bottom: 1px solid #27272a; color: #fafafa;">
              ${item.name}
            </td>
            <td style="padding: 14px; border-bottom: 1px solid #27272a; color: #d4d4d8; text-align:center;">
              ${item.quantity}
            </td>
            <td style="padding: 14px; border-bottom: 1px solid #27272a; color: #f59e0b; text-align:right; font-weight:600;">
              $${(item.price * item.quantity).toLocaleString("es-MX")} MXN
            </td>
          </tr>
        `
      )
      .join("");

    // =========================
    // CLIENTE 
    // =========================

    await resend.emails.send({
      from: "Softvora <gestion@softvora.com.mx>",
      to: [customer.email],
      subject: `Confirmación de compra #${orderId}`,
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
                Gracias por tu compra
              </h2>

              <p style="font-size:16px;line-height:1.8;color:#d4d4d8;">
                Hola <strong>${customerName}</strong>, hemos recibido correctamente tu pago.
                Nuestro equipo comenzará a procesar tu solicitud lo antes posible.
              </p>

              <div style="margin-top:30px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                <p style="margin:0;color:#a1a1aa;font-size:14px;">
                  Número de orden
                </p>

                <p style="margin-top:8px;font-size:24px;font-weight:700;color:#f59e0b;">
                  ${orderId}
                </p>
              </div>

              <table width="100%" cellspacing="0" cellpadding="0" style="margin-top:30px;border-collapse:collapse;background:#0f0f12;border-radius:18px;overflow:hidden;">
                <thead>
                  <tr style="background:#18181b;">
                    <th style="padding:16px;text-align:left;color:#f59e0b;">
                      Servicio
                    </th>
                    <th style="padding:16px;text-align:center;color:#f59e0b;">
                      Cantidad
                    </th>
                    <th style="padding:16px;text-align:right;color:#f59e0b;">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>

              <div style="margin-top:30px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <div style="display:flex;justify-content:space-between;margin-bottom:12px;color:#d4d4d8;">
                  <span>Subtotal</span>
                  <span>$${subtotal.toLocaleString("es-MX")} MXN</span>
                </div>

                <div style="display:flex;justify-content:space-between;margin-bottom:12px;color:#d4d4d8;">
                  <span>IVA</span>
                  <span>$${iva.toLocaleString("es-MX")} MXN</span>
                </div>

                <div style="display:flex;justify-content:space-between;font-size:22px;font-weight:700;color:#f59e0b;">
                  <span>Total</span>
                  <span>$${total.toLocaleString("es-MX")} MXN</span>
                </div>
              </div>

              <div style="margin-top:40px;text-align:center;">
                <a
                  href="https://softvora.com.mx"
                  style="display:inline-block;padding:16px 28px;background:linear-gradient(135deg,#f59e0b,#ea580c);color:white;text-decoration:none;border-radius:14px;font-weight:700;"
                >
                  Ir al sitio web
                </a>
              </div>
            </div>

            <div style="padding:30px;text-align:center;border-top:1px solid #27272a;color:#71717a;font-size:13px;">
              © ${new Date().getFullYear()} softvora.com.mx
            </div>
          </div>
        </div>
      `,
    });

    // =========================
    // NEGOCIO
    // =========================

    await resend.emails.send({
      from: "Checkout Softvora <gestion@softvora.com.mx>",
      to: ["gestion@softvora.com.mx"],
      subject: `Nueva orden recibida #${orderId}`,
      html: `
        <div style="background:#09090b;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">
          <div style="max-width:800px;margin:auto;background:#18181b;border:1px solid #27272a;border-radius:24px;overflow:hidden;">

            <div style="background:linear-gradient(135deg,#f59e0b,#ea580c);padding:40px;">
              <h1 style="margin:0;font-size:30px;font-weight:800;color:white;">
                Nueva Orden Recibida
              </h1>

              <p style="margin-top:10px;color:#ffedd5;">
                softvora.com.mx
              </p>
            </div>

            <div style="padding:40px;">

              <div style="background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                <h2 style="margin-top:0;color:#f59e0b;">
                  Información del cliente
                </h2>

                <p style="color:#d4d4d8;">
                  <strong>Nombre:</strong> ${customerName}
                </p>

                <p style="color:#d4d4d8;">
                  <strong>Correo:</strong> ${customer.email}
                </p>

                <p style="color:#d4d4d8;">
                  <strong>Teléfono:</strong> ${customer.telefono}
                </p>

                <p style="color:#d4d4d8;">
                  <strong>Dirección:</strong> ${customer.direccion}, ${customer.city}, ${customer.state}, ${customer.cp}
                </p>
              </div>

              <table width="100%" cellspacing="0" cellpadding="0" style="margin-top:30px;border-collapse:collapse;background:#0f0f12;border-radius:18px;overflow:hidden;">
                <thead>
                  <tr style="background:#18181b;">
                    <th style="padding:16px;text-align:left;color:#f59e0b;">
                      Servicio
                    </th>

                    <th style="padding:16px;text-align:center;color:#f59e0b;">
                      Cantidad
                    </th>

                    <th style="padding:16px;text-align:right;color:#f59e0b;">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>

              <div style="margin-top:30px;background:#0f0f12;border:1px solid #27272a;border-radius:18px;padding:24px;">
                
                <div style="display:flex;justify-content:space-between;margin-bottom:12px;color:#d4d4d8;">
                  <span>Subtotal</span>
                  <span>$${subtotal.toLocaleString("es-MX")} MXN</span>
                </div>

                <div style="display:flex;justify-content:space-between;margin-bottom:12px;color:#d4d4d8;">
                  <span>IVA</span>
                  <span>$${iva.toLocaleString("es-MX")} MXN</span>
                </div>

                <div style="display:flex;justify-content:space-between;font-size:22px;font-weight:700;color:#f59e0b;">
                  <span>Total</span>
                  <span>$${total.toLocaleString("es-MX")} MXN</span>
                </div>
              </div>

              <div style="margin-top:30px;padding:20px;background:#451a03;border:1px solid #92400e;border-radius:18px;">
                <p style="margin:0;color:#fdba74;font-size:14px;">
                  Orden ID: ${orderId}
                </p>
              </div>
            </div>

            <div style="padding:30px;text-align:center;border-top:1px solid #27272a;color:#71717a;font-size:13px;">
              Sistema automático de checkout · softvora.com.mx
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