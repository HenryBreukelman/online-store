function SignIn() {
  return (
    <>
      <section className='sign-in grid place-center'>
        <div>
          <h1>Sign in</h1>
          <input 
            type='text'
            placeholder='Enter your email'
            maxLength={40}
          />
          <input 
            type='text'
            placeholder='Password'
            maxLength={20}
          />
          <div className='flex justify-center'>
            <input
              type='submit'
              value='Sign In'
              placeholder='Sign In'
            />
          </div>
          <p>Forgotten your password?</p>
          <p>I don't have an account</p>
        </div>
      </section>
    </>
  )
}

export default SignIn;
