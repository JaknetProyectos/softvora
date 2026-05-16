"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1>AVISO DE PRIVACIDAD INTEGRAL</h1>

                <h2>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h2>

                <p>
                    Respetamos su privacidad. Solo usamos sus datos para brindarle el mejor servicio de seguridad informática.
                </p>

                <h3>DATOS DE LA EMPRESA</h3>

                <table >
                    <thead>
                        <tr>
                            <th>Campo</th>
                            <th>Información</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Razón Social</strong></td>
                            <td>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</td>
                        </tr>
                        <tr>
                            <td><strong>Marca Comercial</strong></td>
                            <td>Softvora</td>
                        </tr>
                        <tr>
                            <td><strong>Especialidad</strong></td>
                            <td>Soporte técnico, reparación de software y seguridad informática</td>
                        </tr>
                        <tr>
                            <td><strong>Sitio Web</strong></td>
                            <td>Softvora.com.mx</td>
                        </tr>
                        <tr>
                            <td><strong>Ubicación</strong></td>
                            <td>Calle Londres 275, Int. A, Col. Juárez, Cuauhtémoc, C.P. 06600, CDMX</td>
                        </tr>
                        <tr>
                            <td><strong>Contacto Privacidad</strong></td>
                            <td>
                                <a href="mailto:gestion@softvora.com.mx">
                                    gestion@softvora.com.mx
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3>LAS PREGUNTAS QUE TODOS SE HACEN</h3>

                <h4>¿Qué información mía van a usar?</h4>

                <p>
                    Recabamos <strong>datos de contacto</strong> (nombre, correo, teléfonos y, cuando aplica, dirección de servicio técnico);
                    <strong>información técnica de tus equipos</strong> (modelo, especificaciones, sistema operativo, versiones de software,
                    descripción de fallas e historial de servicios);
                    <strong>datos comerciales</strong> (facturación, método de pago preferido, tipo de servicio y nivel de soporte) y
                    <strong>datos de navegación</strong> (IP y ubicación aproximada, dispositivo, páginas visitadas, tiempo de navegación y preferencias del navegador).
                </p>

                <h4>¿Para qué van a usar mi información?</h4>

                <p>
                    Usamos tus datos para <strong>prestar el servicio</strong> (diagnóstico y reparación de software,
                    configuración de seguridad, soporte remoto/presencial, respaldos y ajustes),
                    <strong>gestionar la relación comercial</strong> (cotizaciones, pagos, facturas,
                    programación de citas, garantías y contratos),
                    <strong>mejorar continuamente</strong> (analizar patrones de fallas, desarrollar soluciones,
                    personalizar recomendaciones y optimizar tiempos de respuesta) y
                    <strong>cumplir la ley</strong> (obligaciones fiscales, conservación de registros,
                    atención a autoridades y evidencia de trabajos realizados).
                </p>

                <h4>¿Con quién comparten mis datos?</h4>

                <p>
                    Podemos compartirlos con <strong>técnicos especializados</strong> bajo estrictos acuerdos de confidencialidad,
                    <strong>proveedores de software</strong> cuando se requieran licencias o actualizaciones,
                    <strong>bancos y procesadores de pago</strong> para operaciones transaccionales y
                    <strong>autoridades</strong> únicamente cuando la ley lo exija.
                    <strong>No</strong> los compartimos con empresas de marketing masivo,
                    competidores, redes sociales ni terceros no autorizados sin tu consentimiento expreso.
                </p>

                <h4>¿Cuánto tiempo guardan mi información?</h4>

                <p>
                    Conservamos tus datos <strong>mientras exista la relación comercial</strong>.
                    Los <strong>datos fiscales</strong> se resguardan por <strong>5 años</strong> (obligación legal).
                    El <strong>historial técnico</strong> por <strong>3 años</strong> para efectos de garantías y soporte.
                    Los <strong>datos de navegación</strong> se conservan por un máximo de <strong>12 meses</strong>.
                </p>

                <h3>TUS DERECHOS (ARCO)</h3>

                <p>
                    Tienes derecho a <strong>Acceso</strong> (saber qué datos tenemos y cómo los usamos,
                    además de con quién se compartieron),
                    <strong>Rectificación</strong> (corregir datos inexactos o desactualizados),
                    <strong>Cancelación</strong> (solicitar la eliminación cuando ya no sea necesaria su conservación) y
                    <strong>Oposición</strong> (limitar o rechazar ciertos usos y revocar consentimientos).
                </p>

                <h4>¿Cómo ejercer tus derechos?</h4>

                <p>
                    Puedes escribir a <strong>gestion@softvora.com.mx</strong>
                    con el asunto “Solicitud ARCO – [Tu nombre]” y adjuntar una identificación oficial.
                </p>

                <p>
                    Si prefieres la vía presencial, entrega un escrito en
                    <strong>
                        Calle Londres 275, Int. A, Col. Juárez, Cuauhtémoc, C.P. 06600, CDMX
                    </strong>,
                    con tu solicitud detallada e identificación (lunes a viernes, 9:00–17:00 h).
                </p>

                <p>
                    Te responderemos en un <strong>máximo de 20 días hábiles</strong> por correo electrónico.
                </p>

                <h3>COOKIES Y TECNOLOGÍAS SIMILARES</h3>

                <p>
                    Usamos <strong>cookies técnicas</strong> (operación del sitio),
                    <strong>de análisis</strong> (mejorar experiencia) y
                    <strong>de personalización</strong> (recordar preferencias).
                </p>

                <p>
                    Puedes gestionarlas en tu navegador:
                    <em>Configuración → Privacidad → Cookies</em>.
                    Si rechazas todas, algunas funciones podrían verse limitadas.
                </p>

                <h3>MENORES DE EDAD</h3>

                <p>
                    No prestamos servicios directos a <strong>menores de 18 años</strong>.
                    Requerimos <strong>autorización parental por escrito</strong>;
                    los padres/tutores son responsables de los datos proporcionados.
                </p>

                <p>
                    Eliminamos de inmediato cualquier dato de menores recabado accidentalmente.
                </p>

                <h3>ACTUALIZACIONES</h3>

                <p>
                    Podemos actualizar este aviso por cambios legales,
                    nuevos servicios/tecnologías,
                    mejoras de seguridad o requerimientos de autoridad.
                </p>

                <p>
                    Publicaremos un <strong>aviso visible en la página principal</strong> cuando ocurra.
                </p>

                <h3>Contacto de privacidad</h3>

                <h4>Oficial de Protección de Datos</h4>

                <p>
                    Correo:
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@softvora.com.mx
                    </a>
                </p>

                <p>
                    Horario:
                    <strong>Lunes a viernes, 9:00–18:00 hrs</strong>
                </p>

                <p>
                    Tiempo de respuesta a consultas:
                    <strong>hasta 48 horas</strong>.
                </p>

                <h3>Información de versión</h3>

                <p>
                    Entrada en vigor:
                    <strong>15 de mayo de 2026</strong>
                </p>

                <p>
                    Versión:
                    <strong>1.0</strong>
                </p>

                <p>
                    Última actualización:
                    <strong>15 de mayo de 2026</strong>
                </p>

                <p>
                    <strong>Cumplimiento:</strong>
                    Este aviso se rige por la
                    <strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong>,
                    su Reglamento y los
                    <strong>Lineamientos del Aviso de Privacidad del INAI</strong>,
                    aplicables en México.
                </p>

                <p>
                    ¿Dudas?
                    Escríbenos a <strong>gestion@softvora.com.mx</strong>.
                    Estamos para ayudarte.
                </p>

            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>
                <h1>COMPREHENSIVE PRIVACY NOTICE</h1>

                <h2>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h2>

                <p>
                    We respect your privacy. We only use your data to provide you with the best cybersecurity service.
                </p>

                <h3>COMPANY INFORMATION</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Corporate Name</strong></td>
                            <td>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</td>
                        </tr>
                        <tr>
                            <td><strong>Commercial Brand</strong></td>
                            <td>Softvora</td>
                        </tr>
                        <tr>
                            <td><strong>Specialization</strong></td>
                            <td>Technical support, software repair, and cybersecurity</td>
                        </tr>
                        <tr>
                            <td><strong>Website</strong></td>
                            <td>Softvora.com.mx</td>
                        </tr>
                        <tr>
                            <td><strong>Location</strong></td>
                            <td>Calle Londres 275, Suite A, Col. Juárez, Cuauhtémoc, ZIP Code 06600, Mexico City, Mexico</td>
                        </tr>
                        <tr>
                            <td><strong>Privacy Contact</strong></td>
                            <td>
                                <a href="mailto:gestion@softvora.com.mx">
                                    gestion@softvora.com.mx
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3>THE QUESTIONS EVERYONE ASKS</h3>

                <h4>What information of mine will you use?</h4>

                <p>
                    We collect <strong>contact information</strong> (name, email, phone numbers, and, when applicable, technical service address);
                    <strong>technical information about your devices</strong> (model, specifications, operating system, software versions,
                    description of issues, and service history);
                    <strong>commercial information</strong> (billing, preferred payment method, type of service, and support level); and
                    <strong>browsing data</strong> (IP address and approximate location, device, visited pages, browsing time, and browser preferences).
                </p>

                <h4>What will you use my information for?</h4>

                <p>
                    We use your data to <strong>provide the service</strong> (software diagnosis and repair,
                    security configuration, remote/on-site support, backups, and adjustments),
                    <strong>manage the business relationship</strong> (quotes, payments, invoices,
                    appointment scheduling, warranties, and contracts),
                    <strong>continuously improve</strong> (analyze failure patterns, develop solutions,
                    personalize recommendations, and optimize response times), and
                    <strong>comply with the law</strong> (tax obligations, record retention,
                    response to authorities, and evidence of completed work).
                </p>

                <h4>Who do you share my data with?</h4>

                <p>
                    We may share it with <strong>specialized technicians</strong> under strict confidentiality agreements,
                    <strong>software providers</strong> when licenses or updates are required,
                    <strong>banks and payment processors</strong> for transactional operations, and
                    <strong>authorities</strong> only when required by law.
                    <strong>We do not</strong> share your information with mass marketing companies,
                    competitors, social networks, or unauthorized third parties without your express consent.
                </p>

                <h4>How long do you keep my information?</h4>

                <p>
                    We retain your data <strong>for as long as the business relationship exists</strong>.
                    <strong>Tax records</strong> are retained for <strong>5 years</strong> (legal obligation).
                    <strong>Technical history</strong> is retained for <strong>3 years</strong> for warranty and support purposes.
                    <strong>Browsing data</strong> is retained for a maximum of <strong>12 months</strong>.
                </p>

                <h3>YOUR RIGHTS (ARCO)</h3>

                <p>
                    You have the right to <strong>Access</strong> (know what data we have and how we use it,
                    as well as with whom it has been shared),
                    <strong>Rectification</strong> (correct inaccurate or outdated data),
                    <strong>Cancellation</strong> (request deletion when retention is no longer necessary), and
                    <strong>Opposition</strong> (limit or reject certain uses and revoke consents).
                </p>

                <h4>How can you exercise your rights?</h4>

                <p>
                    You may write to <strong>gestion@softvora.com.mx</strong>
                    with the subject line “ARCO Request – [Your Name]” and attach an official identification.
                </p>

                <p>
                    If you prefer the in-person method, submit a written request at
                    <strong>
                        Calle Londres 275, Suite A, Col. Juárez, Cuauhtémoc, ZIP Code 06600, Mexico City, Mexico
                    </strong>,
                    along with your detailed request and identification (Monday to Friday, 9:00 AM – 5:00 PM).
                </p>

                <p>
                    We will respond within a <strong>maximum of 20 business days</strong> via email.
                </p>

                <h3>COOKIES AND SIMILAR TECHNOLOGIES</h3>

                <p>
                    We use <strong>technical cookies</strong> (site operation),
                    <strong>analytics cookies</strong> (to improve user experience), and
                    <strong>personalization cookies</strong> (to remember preferences).
                </p>

                <p>
                    You may manage them in your browser:
                    <em>Settings → Privacy → Cookies</em>.
                    If you reject all cookies, some features may be limited.
                </p>

                <h3>MINORS</h3>

                <p>
                    We do not provide services directly to <strong>individuals under 18 years of age</strong>.
                    We require <strong>written parental authorization</strong>;
                    parents/guardians are responsible for the data provided.
                </p>

                <p>
                    We immediately delete any data from minors collected accidentally.
                </p>

                <h3>UPDATES</h3>

                <p>
                    We may update this notice due to legal changes,
                    new services/technologies,
                    security improvements,
                    or authority requirements.
                </p>

                <p>
                    We will publish a <strong>visible notice on the main page</strong> whenever this occurs.
                </p>

                <h3>Privacy Contact</h3>

                <h4>Data Protection Officer</h4>

                <p>
                    Email:
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@softvora.com.mx
                    </a>
                </p>

                <p>
                    Business Hours:
                    <strong>Monday to Friday, 9:00 AM – 6:00 PM</strong>
                </p>

                <p>
                    Inquiry response time:
                    <strong>up to 48 hours</strong>.
                </p>

                <h3>Version Information</h3>

                <p>
                    Effective Date:
                    <strong>May 15, 2026</strong>
                </p>

                <p>
                    Version:
                    <strong>1.0</strong>
                </p>

                <p>
                    Last Updated:
                    <strong>May 15, 2026</strong>
                </p>

                <p>
                    <strong>Compliance:</strong>
                    This notice is governed by the
                    <strong>Federal Law on Protection of Personal Data Held by Private Parties</strong>,
                    its Regulations, and the
                    <strong>INAI Privacy Notice Guidelines</strong>,
                    applicable in Mexico.
                </p>

                <p>
                    Questions?
                    Write to us at <strong>gestion@softvora.com.mx</strong>.
                    We are here to help you.
                </p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}