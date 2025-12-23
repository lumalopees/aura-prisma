import { NextRequest, NextResponse } from "next/server";

// TODO: Configurar Resend API
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação básica
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // TODO: Integrar com Resend
    // const { data, error } = await resend.emails.send({
    //   from: "Contato <contato@auraprisma.com>",
    //   to: [process.env.CONTACT_EMAIL || "contato@auraprisma.com"],
    //   subject: `Nova mensagem de contato - ${name}`,
    //   html: `
    //     <h2>Nova mensagem de contato</h2>
    //     <p><strong>Nome:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Telefone:</strong> ${phone}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // if (error) {
    //   return NextResponse.json(
    //     { error: "Erro ao enviar email" },
    //     { status: 500 }
    //   );
    // }

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

