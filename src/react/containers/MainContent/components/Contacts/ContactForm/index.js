import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import * as S from './styled.js';

const ContactForm = () => {
	emailjs.init('DXqk0yCOlcTBa2oa0');

	const [formResponse, setFormResponse] = useState('');

	useEffect(() => {
		const form = document.getElementById('contact-form');
		form.addEventListener('submit', async (evt) => {
			const templateParams = {
				user_name: document.getElementById('user_name').value,
				user_email: document.getElementById('user_email').value,
				message: document.getElementById('message').value,
			};
			evt.preventDefault();

			setFormResponse('loading');

			await emailjs.send('service_l82m3rk', 'template_ekzdjxo', templateParams)
				.then((res) => { 
					console.log('SUCESSO', res.status, res.text);
					setFormResponse('sucesso');
					setTimeout(() => setFormResponse(''), 5000);
				})
				.catch((err) => { 
					console.log(err);
					setFormResponse('erro');
					setTimeout(() => setFormResponse(''), 5000);
				});
		});
	}, [setFormResponse]);

	return (
		<>
			{formResponse ===  '' ? 
				<S.FormWrapper id='contact-form'>
					<S.FormLabel>Nome</S.FormLabel>
					<S.FormInput type='text' id='user_name' />
					<S.FormLabel>E-mail</S.FormLabel>
					<S.FormInput type='email' id='user_email' />
					<S.FormLabel>Mensagem</S.FormLabel>
					<S.FormText id='message'></S.FormText>
					<S.FormSubmit type='submit' value='Enviar' />
				</S.FormWrapper> 
				: null
			}

			{formResponse === 'loading' ?
				<S.FormLoading />
				: null
			}

			{formResponse === 'sucesso' ? 
				<S.FormSuccessWrapper>
					<S.FormStatusContent>O envio da mensagem foi um sucesso!</S.FormStatusContent>
				</S.FormSuccessWrapper> 
				: null
			}

			{formResponse === 'erro' ? 
				<S.FormFailedWrapper>
					<S.FormStatusContent>O envio da mensagem falhou, por favor verifique as informações e tente novamente!</S.FormStatusContent>
				</S.FormFailedWrapper>
				: null
			}
		</>
	);
};

export default ContactForm;
