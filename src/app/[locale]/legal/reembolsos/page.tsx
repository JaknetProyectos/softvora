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

                <h1>POLÍTICA DE DEVOLUCIONES Y REEMBOLSOS</h1>

                <h2>SOFTVORA – Soporte y Seguridad Informática</h2>

                <h3>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h3>

                <p>
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@softvora.com.mx
                    </a>
                    |
                    <strong>SOFTVORA.com.mx</strong>
                </p>

                <p>
                    <strong>
                        Calle Londres 275, Int. A, Col. Juárez, Cuauhtémoc,
                        C.P. 06600, CDMX
                    </strong>
                </p>

                <h2>1. ALCANCE DE LA POLÍTICA</h2>

                <p>
                    En CODECRAFT TECHNOLOGIES buscamos que cada servicio de soporte técnico y seguridad informática
                    cumpla con los más altos estándares de calidad.
                </p>

                <p>
                    Esta política establece las condiciones bajo las cuales se pueden solicitar devoluciones,
                    reembolsos o créditos a favor del cliente, siempre bajo principios de transparencia y trato justo.
                </p>

                <h2>2. CANCELACIONES Y REEMBOLSOS</h2>

                <ul>
                    <li>
                        <strong>
                            Si el servicio no cumple con las especificaciones contratadas
                        </strong>,
                        el cliente podrá solicitar un reembolso total o parcial.
                    </li>

                    <li>
                        <strong>
                            En caso de fallas atribuibles directamente a nuestro trabajo
                        </strong>,
                        se ofrecerá la compensación correspondiente,
                        ya sea reembolso monetario,
                        crédito para futuros servicios
                        o servicios correctivos sin costo.
                    </li>

                    <li>
                        <strong>
                            Si el retraso en la entrega es considerable y sin causa justificada
                        </strong>,
                        el cliente podrá solicitar la cancelación y reembolso
                        de los montos no utilizados.
                    </li>

                    <li>
                        <strong>
                            Cuando existan limitaciones técnicas no informadas previamente
                        </strong>
                        que impidan la ejecución del servicio,
                        se evaluará el reembolso proporcional.
                    </li>
                </ul>

                <h2>3. SERVICIOS NO REEMBOLSABLES</h2>

                <p>No aplican reembolsos en los siguientes casos:</p>

                <ul>
                    <li>
                        Problemas preexistentes en los sistemas del cliente no reportados.
                    </li>

                    <li>
                        Cambios de requerimientos solicitados durante la ejecución del servicio.
                    </li>

                    <li>
                        Falta de colaboración o acceso por parte del cliente.
                    </li>

                    <li>
                        Eventos de fuerza mayor ajenos a la empresa.
                    </li>

                    <li>
                        Servicios ya prestados y aceptados formalmente por el cliente.
                    </li>

                    <li>
                        Licencias de software, dominios, hosting o capacitaciones ya consumidas.
                    </li>
                </ul>

                <h2>4. FORMAS DE COMPENSACIÓN</h2>

                <p>
                    Dependiendo de la naturaleza del caso, el cliente podrá recibir:
                </p>

                <ul>
                    <li>
                        <strong>Reembolso monetario</strong>,
                        procesado a través del método de pago original.
                        Los tiempos de acreditación dependen del banco emisor
                        y pueden tardar entre uno y varios ciclos de facturación.
                    </li>
                </ul>

                <h2>5. PROCEDIMIENTO PARA SOLICITAR UN REEMBOLSO</h2>

                <p>
                    Toda solicitud debe enviarse por escrito a
                    <strong>gestion@softvora.com.mx</strong>,
                    incluyendo:
                </p>

                <ul>
                    <li>Nombre del cliente o empresa.</li>
                    <li>Servicio contratado.</li>
                    <li>Motivo de la solicitud.</li>
                    <li>Documentación de respaldo, si aplica.</li>
                </ul>

                <p>
                    La empresa evaluará la solicitud y notificará la resolución
                    por escrito en un plazo máximo de
                    <strong>10 días hábiles</strong>,
                    detallando el monto autorizado y el medio de reembolso.
                </p>

                <h2>6. FUERZA MAYOR</h2>

                <p>
                    En caso de situaciones extraordinarias fuera del control de las partes
                    (desastres naturales, emergencias sanitarias,
                    fallas masivas de Internet o actos de autoridad),
                    los servicios podrán suspenderse temporalmente sin responsabilidad.
                </p>

                <p>
                    Si la situación persiste y el servicio resulta imposible de ejecutar,
                    se resolverá la relación de manera proporcional al avance realizado.
                </p>

                <h2>7. MODIFICACIONES DE LA POLÍTICA</h2>

                <p>
                    CODECRAFT TECHNOLOGIES se reserva el derecho
                    de modificar la presente política en cualquier momento.
                </p>

                <p>
                    Las versiones actualizadas estarán disponibles permanentemente
                    en el sitio web.
                </p>

                <h2>8. LEGISLACIÓN APLICABLE</h2>

                <p>
                    Esta política se rige por las leyes mexicanas,
                    en particular por el
                    <strong>Código Civil Federal</strong>
                    y la
                    <strong>Ley Federal de Protección al Consumidor</strong>.
                </p>

                <p>
                    Para cualquier controversia,
                    las partes se someten a los tribunales competentes
                    de la Ciudad de México.
                </p>

                <h3>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h3>

                <p>
                    <em>
                        Esta política ha sido diseñada para brindar máxima transparencia
                        y protección tanto a nuestros clientes como a la empresa,
                        estableciendo un marco claro y justo para todas las transacciones
                        de servicios de ciberseguridad y soporte técnico.
                    </em>
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
                <h1>RETURNS AND REFUNDS POLICY</h1>

                <h2>SOFTVORA – Technical Support and Cybersecurity</h2>

                <h3>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h3>

                <p>
                    <a href="mailto:gestion@softvora.com.mx">
                        gestion@softvora.com.mx
                    </a>
                    |
                    <strong>SOFTVORA.com.mx</strong>
                </p>

                <p>
                    <strong>
                        Calle Londres 275, Suite A, Col. Juárez, Cuauhtémoc,
                        ZIP Code 06600, Mexico City, Mexico
                    </strong>
                </p>

                <h2>1. POLICY SCOPE</h2>

                <p>
                    At CODECRAFT TECHNOLOGIES, we strive to ensure that every technical support
                    and cybersecurity service meets the highest quality standards.
                </p>

                <p>
                    This policy establishes the conditions under which returns,
                    refunds, or customer credits may be requested,
                    always under principles of transparency and fair treatment.
                </p>

                <h2>2. CANCELLATIONS AND REFUNDS</h2>

                <ul>
                    <li>
                        <strong>
                            If the service does not meet the agreed specifications
                        </strong>,
                        the client may request a full or partial refund.
                    </li>

                    <li>
                        <strong>
                            In the event of failures directly attributable to our work
                        </strong>,
                        the corresponding compensation will be offered,
                        whether through a monetary refund,
                        credit for future services,
                        or corrective services at no additional cost.
                    </li>

                    <li>
                        <strong>
                            If there is a significant delay in delivery without justified cause
                        </strong>,
                        the client may request cancellation and reimbursement
                        of unused amounts.
                    </li>

                    <li>
                        <strong>
                            When previously undisclosed technical limitations exist
                        </strong>
                        that prevent the execution of the service,
                        a proportional refund will be evaluated.
                    </li>
                </ul>

                <h2>3. NON-REFUNDABLE SERVICES</h2>

                <p>Refunds do not apply in the following cases:</p>

                <ul>
                    <li>
                        Pre-existing issues in the client's systems that were not reported.
                    </li>

                    <li>
                        Requirement changes requested during service execution.
                    </li>

                    <li>
                        Lack of collaboration or access from the client.
                    </li>

                    <li>
                        Force majeure events beyond the company's control.
                    </li>

                    <li>
                        Services already rendered and formally accepted by the client.
                    </li>

                    <li>
                        Software licenses, domains, hosting, or training services already consumed.
                    </li>
                </ul>

                <h2>4. FORMS OF COMPENSATION</h2>

                <p>
                    Depending on the nature of the case, the client may receive:
                </p>

                <ul>
                    <li>
                        <strong>Monetary refund</strong>,
                        processed through the original payment method.
                        Processing times depend on the issuing bank
                        and may take between one and several billing cycles.
                    </li>
                </ul>

                <h2>5. PROCEDURE TO REQUEST A REFUND</h2>

                <p>
                    All requests must be submitted in writing to
                    <strong>gestion@softvora.com.mx</strong>,
                    including:
                </p>

                <ul>
                    <li>Client or company name.</li>
                    <li>Contracted service.</li>
                    <li>Reason for the request.</li>
                    <li>Supporting documentation, if applicable.</li>
                </ul>

                <p>
                    The company will evaluate the request
                    and notify the resolution in writing
                    within a maximum period of
                    <strong>10 business days</strong>,
                    detailing the authorized amount
                    and the refund method.
                </p>

                <h2>6. FORCE MAJEURE</h2>

                <p>
                    In the event of extraordinary situations beyond the parties' control
                    (natural disasters, health emergencies,
                    massive Internet outages, or acts of authority),
                    services may be temporarily suspended without liability.
                </p>

                <p>
                    If the situation persists and the service becomes impossible to perform,
                    the relationship shall be resolved proportionally
                    according to the completed progress.
                </p>

                <h2>7. POLICY MODIFICATIONS</h2>

                <p>
                    CODECRAFT TECHNOLOGIES reserves the right
                    to modify this policy at any time.
                </p>

                <p>
                    Updated versions will remain permanently available
                    on the website.
                </p>

                <h2>8. APPLICABLE LEGISLATION</h2>

                <p>
                    This policy is governed by Mexican law,
                    particularly the
                    <strong>Federal Civil Code</strong>
                    and the
                    <strong>Federal Consumer Protection Law</strong>.
                </p>

                <p>
                    For any dispute,
                    the parties submit to the competent courts
                    of Mexico City.
                </p>

                <h3>CODECRAFT TECHNOLOGIES, S.A. DE C.V.</h3>

                <p>
                    <em>
                        This policy has been designed to provide maximum transparency
                        and protection for both our clients and the company,
                        establishing a clear and fair framework
                        for all cybersecurity and technical support service transactions.
                    </em>
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