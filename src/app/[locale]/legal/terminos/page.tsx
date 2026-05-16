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
                <h1>TÉRMINOS Y CONDICIONES DE SERVICIO</h1>

                <h2>SOFTVORA – CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h2>

                <p>
                    Soporte Técnico • Reparación de Software • Seguridad Informática
                </p>

                <h3>DATOS DE LA EMPRESA:</h3>

                <ul>
                    <li>
                        <strong>Razón Social:</strong>
                        CODECRAFT TECHNOLOGIES, S.A. DE C.V.
                    </li>

                    <li>
                        <strong>Sitio Web:</strong>
                        Softvora.com.mx
                    </li>

                    <li>
                        <strong>Email:</strong>
                        <a href="mailto:gestion@softvora.com.mx">
                            gestion@Softvora.com.mx
                        </a>
                    </li>

                    <li>
                        <strong>Domicilio:</strong>
                        Calle Londres 275, Int. A, Col. Juárez, Cuauhtémoc,
                        C.P. 06600, CDMX
                    </li>
                </ul>

                <h2>1. ACEPTACIÓN DE LOS TÉRMINOS</h2>

                <p>
                    Al contratar cualquiera de nuestros servicios,
                    el cliente acepta íntegramente las condiciones aquí establecidas.
                </p>

                <p>
                    Si no está de acuerdo con alguna disposición,
                    deberá abstenerse de utilizar los servicios de SOFTVORA.
                </p>

                <h2>2. SERVICIOS OFRECIDOS</h2>

                <p>
                    SOFTVORA presta servicios de soporte técnico,
                    reparación de software y seguridad informática,
                    tanto en modalidad remota como presencial,
                    según la naturaleza de la incidencia.
                </p>

                <ul>
                    <li>
                        <strong>Soporte técnico:</strong>
                        asistencia inmediata, diagnóstico y resolución de incidencias,
                        así como consultoría especializada.
                    </li>

                    <li>
                        <strong>Reparación de software:</strong>
                        eliminación de virus y malware,
                        recuperación de archivos,
                        instalación y configuración de programas,
                        optimización de rendimiento.
                    </li>

                    <li>
                        <strong>Seguridad informática:</strong>
                        auditorías de seguridad,
                        implementación de firewalls,
                        monitoreo de amenazas
                        y capacitación en ciberseguridad.
                    </li>
                </ul>

                <p>
                    Cada servicio contratado tendrá un alcance definido
                    y tiempos de respuesta estimados,
                    mismos que se comunicarán al cliente
                    al inicio de la relación comercial.
                </p>

                <h2>3. Obligaciones de las partes</h2>

                <h3>Obligaciones de SOFTVORA</h3>

                <ul>
                    <li>
                        Ejecutar los servicios con personal técnico certificado
                        y con experiencia comprobable.
                    </li>

                    <li>
                        Utilizar únicamente software original y licenciado.
                    </li>

                    <li>
                        Proporcionar al cliente documentación clara
                        y reportes técnicos sobre los trabajos realizados.
                    </li>

                    <li>
                        Mantener estricta confidencialidad respecto de la información
                        a la que se tenga acceso durante el servicio.
                    </li>
                </ul>

                <h3>Obligaciones del cliente</h3>

                <ul>
                    <li>
                        Respaldar previamente la información crítica
                        antes de la intervención técnica.
                    </li>

                    <li>
                        Proporcionar accesos administrativos,
                        contraseñas o permisos necesarios
                        para la ejecución del servicio.
                    </li>

                    <li>
                        Mantener comunicación y disponibilidad
                        para resolver consultas durante el proceso.
                    </li>

                    <li>
                        Realizar los pagos en tiempo y forma
                        conforme a lo acordado.
                    </li>
                </ul>

                <h2>4. GARANTÍAS Y EXCLUSIONES</h2>

                <p>
                    Cada servicio incluye una garantía limitada
                    cuyo plazo y alcance dependerán
                    de la naturaleza del trabajo realizado.
                </p>

                <p>
                    SOFTVORA se compromete a reejecutar sin costo adicional
                    los servicios que presenten la misma falla
                    dentro del periodo de garantía informado al cliente.
                </p>

                <p>
                    La garantía no cubre daños ocasionados por mal uso posterior,
                    nuevas infecciones de software malicioso,
                    daños de hardware no detectados en el diagnóstico inicial,
                    modificaciones realizadas por terceros no autorizados
                    ni actualizaciones automáticas
                    que generen incompatibilidades.
                </p>

                <h2>5. PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>

                <p>
                    SOFTVORA cumple con la
                    <strong>
                        Ley Federal de Protección de Datos Personales
                        en Posesión de los Particulares (LFPDPPP)
                    </strong>
                    y garantiza que los datos recopilados
                    se utilizan únicamente para la prestación del servicio.
                </p>

                <p>
                    El cliente podrá ejercer en cualquier momento sus derechos de
                    <strong>
                        acceso, rectificación, cancelación y oposición (ARCO)
                    </strong>
                    enviando una solicitud a
                    gestion@softvora.com.mx,
                    adjuntando identificación oficial vigente.
                </p>

                <h2>6. LIMITACIÓN DE RESPONSABILIDAD</h2>

                <p>
                    La responsabilidad máxima de SOFTVORA
                    se limita al monto efectivamente pagado
                    por el servicio que dio origen a la reclamación.
                </p>

                <p>
                    SOFTVORA no será responsable por pérdida de datos no respaldados,
                    interrupciones ocasionadas por terceros
                    (como proveedores de internet o energía),
                    fallas preexistentes de hardware,
                    incompatibilidades derivadas de software de terceros
                    ni por daños indirectos,
                    consecuenciales
                    o lucro cesante del cliente o de terceros.
                </p>

                <p>
                    En casos de fuerza mayor
                    (desastres naturales,
                    emergencias nacionales,
                    fallas masivas de telecomunicaciones
                    o eventos ajenos a nuestro control),
                    las obligaciones contractuales
                    podrán suspenderse temporalmente
                    sin responsabilidad para las partes.
                </p>

                <h2>7. CANCELACIONES Y REEMBOLSOS</h2>

                <p>
                    El cliente podrá cancelar servicios en cualquier momento,
                    sujeto a lo establecido en la
                    <strong>
                        Política de Devoluciones y Reembolsos
                    </strong>
                    publicada en nuestro sitio web.
                </p>

                <p>
                    SOFTVORA podrá cancelar un servicio
                    en caso de falta de pago,
                    incumplimiento reiterado de obligaciones,
                    interferencia indebida en la labor técnica
                    o conductas inapropiadas hacia el personal.
                </p>

                <p>
                    En tales casos,
                    los reembolsos se regirán igualmente
                    por la política antes mencionada.
                </p>

                <h2>8. RESOLUCIÓN DE CONFLICTOS</h2>

                <p>
                    Cualquier reclamación o controversia
                    será atendida en primera instancia
                    de forma directa con SOFTVORA.
                </p>

                <p>
                    Si no se logra una solución,
                    el cliente podrá acudir a
                    <strong>PROFECO</strong>
                    o a un mecanismo de mediación
                    o arbitraje autorizado.
                </p>

                <h2>9. LEGISLACIÓN Y JURISDICCIÓN</h2>

                <p>
                    Estos términos se rigen por las leyes mexicanas.
                </p>

                <p>
                    Para cualquier controversia,
                    las partes se someten a los tribunales competentes
                    de la Ciudad de México,
                    renunciando expresamente a cualquier otro fuero.
                </p>

                <h2>10. MODIFICACIONES A LOS TÉRMINOS</h2>

                <p>
                    SOFTVORA se reserva el derecho
                    de actualizar estos términos y condiciones
                    en cualquier momento.
                </p>

                <p>
                    Las modificaciones serán publicadas
                    en el sitio web oficial
                    y entrarán en vigor
                    30 días naturales después de su publicación.
                </p>

                <h2>11. CONTACTO</h2>

                <p>
                    Para cualquier aclaración sobre estos términos,
                    el cliente puede comunicarse a:
                </p>

                <p>
                    <strong>Correo:</strong>
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@Softvora.com.mx
                    </a>
                </p>

                <p>
                    <strong>Horario de atención:</strong>
                    Lunes a viernes, 9:00 – 18:00 hrs
                </p>

                <p>
                    <strong>
                        CODECRAFT TECHNOLOGIES, S.A. DE C.V.
                    </strong>
                    – Todos los derechos reservados
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
                <h1>TERMS AND CONDITIONS OF SERVICE</h1>

                <h2>SOFTVORA – CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h2>

                <p>
                    Technical Support • Software Repair • Cybersecurity
                </p>

                <h3>COMPANY INFORMATION:</h3>

                <ul>
                    <li>
                        <strong>Corporate Name:</strong>
                        CODECRAFT TECHNOLOGIES, S.A. DE C.V.
                    </li>

                    <li>
                        <strong>Website:</strong>
                        Softvora.com.mx
                    </li>

                    <li>
                        <strong>Email:</strong>
                        <a href="mailto:gestion@softvora.com.mx">
                            gestion@Softvora.com.mx
                        </a>
                    </li>

                    <li>
                        <strong>Address:</strong>
                        Calle Londres 275, Suite A, Col. Juárez, Cuauhtémoc,
                        ZIP Code 06600, Mexico City, Mexico
                    </li>
                </ul>

                <h2>1. ACCEPTANCE OF TERMS</h2>

                <p>
                    By hiring any of our services,
                    the client fully accepts the terms and conditions established herein.
                </p>

                <p>
                    If the client does not agree with any provision,
                    they must refrain from using SOFTVORA services.
                </p>

                <h2>2. SERVICES OFFERED</h2>

                <p>
                    SOFTVORA provides technical support,
                    software repair,
                    and cybersecurity services,
                    both remotely and on-site,
                    depending on the nature of the issue.
                </p>

                <ul>
                    <li>
                        <strong>Technical support:</strong>
                        immediate assistance,
                        diagnosis and resolution of incidents,
                        as well as specialized consulting.
                    </li>

                    <li>
                        <strong>Software repair:</strong>
                        virus and malware removal,
                        file recovery,
                        software installation and configuration,
                        and performance optimization.
                    </li>

                    <li>
                        <strong>Cybersecurity:</strong>
                        security audits,
                        firewall implementation,
                        threat monitoring,
                        and cybersecurity training.
                    </li>
                </ul>

                <p>
                    Each contracted service will have a defined scope
                    and estimated response times,
                    which will be communicated to the client
                    at the beginning of the business relationship.
                </p>

                <h2>3. OBLIGATIONS OF THE PARTIES</h2>

                <h3>SOFTVORA Obligations</h3>

                <ul>
                    <li>
                        Perform services using certified technical personnel
                        with verifiable experience.
                    </li>

                    <li>
                        Use only original and properly licensed software.
                    </li>

                    <li>
                        Provide the client with clear documentation
                        and technical reports regarding the work performed.
                    </li>

                    <li>
                        Maintain strict confidentiality regarding any information
                        accessed during the service.
                    </li>
                </ul>

                <h3>Client Obligations</h3>

                <ul>
                    <li>
                        Back up critical information
                        prior to technical intervention.
                    </li>

                    <li>
                        Provide administrative access,
                        passwords,
                        or permissions necessary
                        for the execution of the service.
                    </li>

                    <li>
                        Maintain communication and availability
                        to resolve inquiries during the process.
                    </li>

                    <li>
                        Make payments on time
                        according to the agreed terms.
                    </li>
                </ul>

                <h2>4. WARRANTIES AND EXCLUSIONS</h2>

                <p>
                    Each service includes a limited warranty
                    whose duration and scope
                    will depend on the nature of the work performed.
                </p>

                <p>
                    SOFTVORA agrees to re-perform,
                    at no additional cost,
                    services presenting the same issue
                    within the warranty period informed to the client.
                </p>

                <p>
                    The warranty does not cover damages caused by subsequent misuse,
                    new malicious software infections,
                    hardware damage not detected during the initial diagnosis,
                    modifications made by unauthorized third parties,
                    or automatic updates
                    that generate incompatibilities.
                </p>

                <h2>5. PRIVACY AND DATA PROTECTION</h2>

                <p>
                    SOFTVORA complies with the
                    <strong>
                        Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)
                    </strong>
                    and guarantees that collected data
                    is used solely for service provision purposes.
                </p>

                <p>
                    The client may exercise at any time their rights of
                    <strong>
                        access, rectification, cancellation, and opposition (ARCO)
                    </strong>
                    by sending a request to
                    gestion@softvora.com.mx,
                    attaching a valid official identification.
                </p>

                <h2>6. LIMITATION OF LIABILITY</h2>

                <p>
                    SOFTVORA’s maximum liability
                    is limited to the amount actually paid
                    for the service giving rise to the claim.
                </p>

                <p>
                    SOFTVORA shall not be liable for loss of unbacked data,
                    interruptions caused by third parties
                    (such as internet or power providers),
                    pre-existing hardware failures,
                    incompatibilities derived from third-party software,
                    or indirect,
                    consequential,
                    or lost-profit damages suffered by the client or third parties.
                </p>

                <p>
                    In cases of force majeure
                    (natural disasters,
                    national emergencies,
                    massive telecommunications failures,
                    or events beyond our control),
                    contractual obligations
                    may be temporarily suspended
                    without liability for either party.
                </p>

                <h2>7. CANCELLATIONS AND REFUNDS</h2>

                <p>
                    The client may cancel services at any time,
                    subject to the provisions established in the
                    <strong>
                        Returns and Refunds Policy
                    </strong>
                    published on our website.
                </p>

                <p>
                    SOFTVORA may cancel a service
                    in the event of non-payment,
                    repeated breach of obligations,
                    improper interference with technical work,
                    or inappropriate conduct toward staff members.
                </p>

                <p>
                    In such cases,
                    refunds shall also be governed
                    by the aforementioned policy.
                </p>

                <h2>8. DISPUTE RESOLUTION</h2>

                <p>
                    Any claim or dispute
                    shall first be addressed directly with SOFTVORA.
                </p>

                <p>
                    If no resolution is reached,
                    the client may contact
                    <strong>PROFECO</strong>
                    or an authorized mediation
                    or arbitration mechanism.
                </p>

                <h2>9. GOVERNING LAW AND JURISDICTION</h2>

                <p>
                    These terms are governed by Mexican law.
                </p>

                <p>
                    For any dispute,
                    the parties submit to the competent courts
                    of Mexico City,
                    expressly waiving any other jurisdiction.
                </p>

                <h2>10. MODIFICATIONS TO THE TERMS</h2>

                <p>
                    SOFTVORA reserves the right
                    to update these terms and conditions
                    at any time.
                </p>

                <p>
                    Modifications will be published
                    on the official website
                    and shall enter into force
                    30 calendar days after publication.
                </p>

                <h2>11. CONTACT</h2>

                <p>
                    For any clarification regarding these terms,
                    the client may contact:
                </p>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@Softvora.com.mx
                    </a>
                </p>

                <p>
                    <strong>Business Hours:</strong>
                    Monday to Friday, 9:00 AM – 6:00 PM
                </p>

                <p>
                    <strong>
                        CODECRAFT TECHNOLOGIES, S.A. DE C.V.
                    </strong>
                    – All rights reserved
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