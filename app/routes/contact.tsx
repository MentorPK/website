import { json } from '@remix-run/node';
import { Resend } from 'resend';
import type { ActionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import Container from '~/components/Container';
import Input from '~/components/Inputs';
import Button from '~/components/Button';
const resend = new Resend(process.env.RESEND_API_KEY);

export const action = async ({ request }: ActionArgs) => {
  const formObject = Object.fromEntries(
    new URLSearchParams(await request.text())
  );
  //TODO: proper validation
  if (formObject.name && formObject.email && formObject.message === null) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const myMail: string = process.env.MY_EMAIL!;
  try {
    const data = await resend.emails.send({
      from: `${formObject.name} ${formObject.email} <onboardingt@resend.dev>`,
      to: [myMail],
      subject: `${formObject.email} webpaw solution contact`,
      html: `<p>${formObject.message}</p>`,
    });
    return json(data, 200);
  } catch (error) {
    return json({ error }, 400);
  }
};

export default function ContactForm() {
  return (
    <div className="bg-secondary text-slate-200">
      <Container>
        <Form method="post" className="w-full">
          <div className="flex flex-col gap-4">
            <Input
              name="name"
              type="text"
              label="Name"
              placeholder="John Wick"
            />
            <Input
              name="email"
              type="text"
              label="Email"
              placeholder="john.wick@continental.com"
            />
            <Input
              name="message"
              type="textarea"
              label="Message"
              placeholder="Write me your desire!"
            />
            <Button type="submit" design="self-center">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
