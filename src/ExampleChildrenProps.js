function BlogPost(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.children}
    </>
  );
  // TODO: Add the children here
}

export default function ExampleChildrenProps() {
  // TODO: Use BlogPost here 3 times,
  // with different content
  return (
    <>
      <h1>ExampleChildrenProps</h1>
      <BlogPost title="New version of UpLeveled Preflight released">
        <p>We recently released the v10.0.20 of UpLeveled Preflight.</p>
        <p>Check it out.</p>
      </BlogPost>

      <BlogPost title="New version of UpLeveled Preflight released2">
        <p>We recent3ly released the v10.0.20 of UpLeveled Preflight.</p>
      </BlogPost>

      <BlogPost title="New version of UpLeveled Preflight released3">
        <p>Check it out.</p>
      </BlogPost>
    </>
  );
}
