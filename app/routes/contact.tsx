import { json } from '@remix-run/node';
import { Resend } from 'resend';
import type { ActionArgs } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import Container from '~/components/Container';
import Input from '~/components/Inputs';
import Button from '~/components/Button';
import Footer from '~/components/Footer';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '~/components/Header';
import Checkbox from '~/components/Checkbox';
import { useState } from 'react';
const validateName = (name: string) => {
  if (!name) {
    return 'Please provide a Name.';
  } else if (typeof name !== 'string' || name.length < 3) {
    return 'Name must be at least 3 cahracters long';
  }
};

const validateEmail = (email: string) => {
  const regex = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!email) {
    return 'Please provide a email address.';
  } else if (!regex.test(email)) {
    return 'Invalid emaill address!';
  }
};

const validateMessage = (message: string) => {
  if (!message) {
    return 'Please provide a message.';
  } else if (typeof message !== 'string' || message.length < 10) {
    return 'Message must be at least 10 characters long';
  }
};

export const action = async ({ request }: ActionArgs) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fields = Object.fromEntries(new URLSearchParams(await request.text()));
  const errors = {
    name: validateName(fields.name),
    email: validateEmail(fields.email),
    message: validateMessage(fields.message),
  };
  if (Object.values(errors).some(Boolean)) {
    return { errors, fields };
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const myMail: string = process.env.MY_EMAIL!;
  try {
    const data = await resend.emails.send({
      from: `${fields.name} <onboardingt@resend.dev>`,
      to: [myMail],
      subject: `${fields.email} webpaw solutions contact`,
      html: `<div><div><strong>Contact from: ${fields.email}</strong></div><p>${fields.message}</p></div>`,
    });
    return json(data, 200);
  } catch (error) {
    return json({ error }, 400);
  }
};

const Contact = () => {
  const actionData = useActionData();
  const [checked, setChecked] = useState(false);
  const checkboxLabel = () => {
    return (
      <div>
        I have read and agree to the{' '}
        <Link to="/privacy-policy" className="link text-primary">
          privacy policy
        </Link>{' '}
        guidelines.
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary w-full ">
      <Header />
      <Container>
        <div className="my-12 mx-2">
          <div className="self-start">
            Hey, if you want to get in touch in me just write me a message!
          </div>
          <Form method="post" className="w-full">
            <div className="flex flex-col gap-4">
              <Input
                name="name"
                type="text"
                label="Name"
                placeholder="John Wick"
                error={actionData?.errors?.name}
                defaultValue={actionData?.fields?.name}
              />
              <Input
                name="email"
                type="text"
                label="Email"
                placeholder="john.wick@continental.com"
                error={actionData?.errors?.email}
                defaultValue={actionData?.fields?.email}
              />
              <Input
                name="message"
                type="textarea"
                label="Message"
                placeholder="Write me your desire!"
                error={actionData?.errors?.message}
                defaultValue={actionData?.fields?.message}
              />
              <Checkbox label={checkboxLabel()} setChecked={setChecked} />
              <div className="flex justify-center items-center gap-4">
                <Button type="submit" design="self-center" disabled={!checked}>
                  Submit
                </Button>
                {actionData?.id && (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-10 h-10 text-successGreen transition ease-in duration-200"
                  />
                )}
              </div>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
