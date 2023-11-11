import Section from '../components/UI/Section';

const Error = () => {
  return (
    <>
      <Section>
        <section
          className='d-flex align-items-center justify-content-center w-100'
          style={{ minHeight: 'calc(75vh - 220px)' }}
        >
          <div className='d-flex flex-column align-items-center gap-2'>
            <h1>An error occurred!</h1>
            <p className='fs-5'>Could not find this page!</p>
          </div>
        </section>
      </Section>
    </>
  );
};

export default Error;
