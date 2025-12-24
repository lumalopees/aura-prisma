import { NextRequest, NextResponse } from "next/server";

// TODO: Descomentar quando configurar Resend
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação completa
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Validação de telefone (formato básico)
    const phoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "Telefone inválido" },
        { status: 400 }
      );
    }

    // Validação de mensagem (mínimo de caracteres)
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Mensagem deve ter pelo menos 10 caracteres" },
        { status: 400 }
      );
    }

    // TODO: Integrar com Resend
    // Descomentar e configurar quando tiver a API key
    /*
    const { data, error } = await resend.emails.send({
      from: "Contato Aura Prisma <contato@auraprisma.com>",
      to: [process.env.CONTACT_EMAIL || "contato@auraprisma.com"],
      replyTo: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #7c3aed;">Nova mensagem de contato</h2>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone}</p>
              </div>
              <div style="margin-top: 20px;">
                <h3 style="color: #7c3aed;">Mensagem:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email. Tente novamente mais tarde." },
        { status: 500 }
      );
    }
    */

    // Por enquanto, apenas simula sucesso
    // Em produção, descomentar o código acima e configurar Resend

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
