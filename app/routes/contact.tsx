import { json } from '@remix-run/node';
import { Resend } from 'resend';
import type { ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { Form, Link, useActionData, useNavigation } from '@remix-run/react';
import Container from '~/components/Container';
import Input from '~/components/Inputs';
import Button from '~/components/Button';
import Footer from '~/components/Footer';
import { faCircleCheck, faFaceSadCry } from '@fortawesome/free-regular-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import MyCaptcha from '~/components/MyCaptcha';
import { useState } from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Contact | webpaw solutions'
    },
    {
      name: 'description',
      content:
        "Hey there! Let's connect and make amazing things happen. Got questions or ideas? Don't hesitate to reach out through the contact form. Looking forward to hearing from you and bringing your digital dreams to life!"
    }
  ];
};

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
    message: validateMessage(fields.message)
  };
  if (Object.values(errors).some(Boolean)) {
    return { errors, fields };
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  try {
    const data = await resend.emails.send({
      from: `${fields.name} <resend@resend.dev>`,
      to: [`${process.env.MY_EMAIL}`],
      subject: `${fields.email} webpaw solutions contact`,
      html: `<div><div><strong>Contact from: ${fields.email}</strong></div><p>${fields.message}</p></div>`
    });
    return json(data, 200);
  } catch (error) {
    return json({ error }, 400);
  }
};

const Contact = () => {
  const actionData = useActionData();
  const submit = useNavigation();
  const [disabled, setDisabled] = useState(true);

  const validateCaptcha = (captcha: number, captchaInput: number) => {
    if (captcha !== captchaInput) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary w-full ">
      <Header />
      <Container>
        <div className="my-12 mx-2 max-w-[600px]">
          <div className="self-start mb-4">
            Hey, if you want to get in touch with me just write me a message! I will guarantee to
            get back to you within 48 hours. Please note that we will only respond to serious
            project inquiries that have been written in German or English.
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
                icon={faUser}
              />
              <Input
                name="email"
                type="text"
                label="Email"
                placeholder="john.wick@continental.com"
                error={actionData?.errors?.email}
                defaultValue={actionData?.fields?.email}
                icon={faEnvelope}
              />
              <Input
                name="message"
                type="textarea"
                label="Message"
                placeholder="Write me your desire!"
                error={actionData?.errors?.message}
                defaultValue={actionData?.fields?.message}
              />
              <div>
                Here you can find infomations about our{' '}
                <Link to="/privacy-policy" className="link text-primary">
                  privacy policy
                </Link>{' '}
                guidelines.
              </div>
              <MyCaptcha validateCaptcha={validateCaptcha} />
              <div className="flex justify-center items-center gap-4">
                {!actionData?.id && submit.state !== 'submitting' && (
                  <Button type="submit" design="self-center" disabled={disabled}>
                    Submit
                  </Button>
                )}
                {actionData?.id && submit.state !== 'submitting' && (
                  <div className="border-2 border-successGreen rounded-md py-2 px-4 my-2 text-successGreen animate-[shake_1s_ease-in-out_1] flex flex-row justify-between items-center w-full">
                    Message was sent!{' '}
                    <FontAwesomeIcon icon={faCircleCheck} className="w-8 h-8 ml-2" />
                  </div>
                )}
              </div>
              {actionData?.error && (
                <div className="border-2 border-errorRed rounded-md py-2 px-4 my-2 text-errorRed animate-[shake_1s_ease-in-out_1] flex flex-row justify-between items-center max-w-full">
                  Message could not be sent. Please contact me directly through email:
                  pawel@web-paw.com
                  <FontAwesomeIcon icon={faFaceSadCry} className="w-8 h-8 ml-2" />
                </div>
              )}
              <div className="self-center">
                {submit.state === 'submitting' ? <Loader dots /> : null}
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
