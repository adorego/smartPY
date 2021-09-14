import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import {Login, LoginProps} from './Login';
import ReactTestUtils from 'react-dom/test-utils';
import {createInterface} from "readline";

describe('Login', () => {

   const props = {
      onSubmit: () => true
   }
   it('renders a form', function () {
      const {container} = render(<Login {...props}/>);
      //console.log(container);
      //screen.debug();

      // @ts-ignore
      expect(container.querySelector('form[id="login"]')).toBeInTheDocument();
   });

   it('renders Container', () =>{
      const {container} = render(<Login {...props}/>);
      //screen.debug();
      // @ts-ignore
      expect(container.querySelector("main")).toBeInTheDocument();
   });

   it('renders login title', () =>{
      const {container,getByText} = render(<Login {...props}/>);
      screen.debug();
      expect(getByText('Bienvenido!')).toBeInTheDocument();
   });

   const expectationOnTextFields = (formElement:HTMLInputElement, name:string) =>{
      expect(formElement).not.toBeNull();
      expect(formElement.name).toEqual(name);
      expect(formElement.tagName).toEqual('INPUT');
      expect(formElement.type).toEqual('text');
   }
   const findFormElement = (id_form:string, elementName:string, container:HTMLElement):any =>{
      const formRoot:HTMLFormElement|null = container.querySelector(`form[id=${id_form}]`);
      if(formRoot){
         return formRoot.elements.namedItem(elementName);
      }else{
         return null;
      }

   }
   describe("Email input", ()=>{
      it('renders as text box', () =>{
         const {container} = render(<Login {...props} />);
         //screen.debug();
         const emailElement = findFormElement('login','email', container);
         expectationOnTextFields(emailElement, 'email');

      });
   });
   describe("Password input", ()=>{

   });





   it('renders TextField password', () => {
      const {container} = render(<Login {...props}/>);
      screen.debug();
      // @ts-ignore
      expect(container.querySelector('form[id="login"]').elements.password).toBeInTheDocument();
      // @ts-ignore
      expect(container.querySelector("input[type='password']")).toBeInTheDocument();
   });

   it('renders submit button', () => {
      const {container} = render(<Login {...props}/>);
      screen.debug();
      // @ts-ignore
      expect(container.querySelector("button[type='submit']")).toBeInTheDocument();
   });

   it('renders Forget Password Link', () => {
      const {container, getByText} = render(<Login {...props}/>);
      screen.debug();
      expect(screen.getByText('Olvidé mi clave')).toBeInTheDocument();
   });

   it('renders Registrate Link', () => {
      render(<Login />);
      screen.debug();
      expect(screen.getByText('Registrate')).toBeInTheDocument();
   });

   it('updates email with Props', () => {
      const emailString = "adoregoel@gmail.com";
      const {container} = render(<Login {...props} email ={`${emailString}`} />);
      //screen.debug();
      expect(container.querySelector('input[name="email"]').value).toEqual(`${emailString}`);
   });

   it('saves email before submit', async () => {
      expect.assertions(1);
      const {container} = render(<Login email="adoregoel@gmail.com" onSubmit={({email}) => {

         expect(email).toEqual('adoregoel@gmail.com');
      }}
      />);
       await ReactTestUtils.Simulate.submit((container.querySelector("form[id='login']")));
   });


   it('save email when submitting', async () => {
      expect.assertions(1);
      const {container} = render(<Login email="prueba@gmail.com" onSubmit={({email}) => {

         expect(email).toEqual('adoregoel@gmail.com');
      }}
      />);
      const formElement = container.querySelector("form[id='login']");
      const emailField = formElement.elements.email;
      //console.log('EmailField:', emailField);
      //console.log('FormElement:', formElement);
      //Dispatches
      await ReactTestUtils.Simulate.change(emailField, {
             target: {value: 'adoregoel@gmail.com'}
          });
      await ReactTestUtils.Simulate.submit(formElement);
   });

   it('send password on submitting', async () => {
      expect.assertions(1);
      const {container} = render(<Login email="prueba@gmail.com" onSubmit={({password}) => {

         expect(password).toEqual('clave2000');
      }}
      />);
      const formElement = container.querySelector("form[id='login']");
      const passField = formElement.elements.password;
      await ReactTestUtils.Simulate.change(passField, {
         target:{value:'clave2000'}
      });
      await ReactTestUtils.Simulate.submit(formElement);
   });
});