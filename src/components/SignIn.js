import React from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
  const { 
    register, handleSubmit, formState: { isValid } 
  } = useForm({ mode: 'onChange' });

  const onSubmit = data => {
    // Your sign in logic here
  }

  return (
    <>
      <section className='sign-in grid place-center'>
        <div>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              {...register('email', { required: true })}
              type='email'
              name='email'
              placeholder='Enter your email'
              maxLength={40}
            />
            <input 
              {...register('password', { required: true })}
              type='password'
              name='password'
              placeholder='Password'
              maxLength={20}
            />
            <div className='flex justify-center'>
              <input
                type='submit'
                value='Sign In'
                placeholder='Sign In'
                disabled={!isValid}
                /*style button*/
                style={{ backgroundColor: isValid ? '#5a8db3' : '#d3d3d3' }}
              />
            </div>
          </form>
          <p>Forgotten your password?</p>
          <p>I don't have an account</p>
        </div>
      </section>
    </>
  )
}

export default SignIn;
