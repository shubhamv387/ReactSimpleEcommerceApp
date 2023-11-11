const Section = ({ className, children }) => {
  return (
    <section
      className={`d-flex gap-3 m-auto flex-column justify-content-center align-items-center w-100 ${
        className ? className : ''
      }`}
      style={{ maxWidth: '900px' }}
    >
      {children}
    </section>
  );
};

export default Section;
