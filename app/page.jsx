import LikeButton from './like-button';

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return '_';
  }
}

function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

function HeaderProps(props) {
  console.log(props.title);
  return <h1>{props.title}</h1>;
}

function HeaderPropsLiteral(props) {
  console.log(props.title);
  return <h1>{`${props.title}`}</h1>;
}

function HeaderPropsFunction(props) {
  console.log(props.literal);
  return <h1>{createTitle(props.title)}</h1>;
}

function Layout() {
  return (
    <div id="layout">
      <Nav />
    </div>
  );
}

function Nav() {
  return <div id="nav">nav</div>;
}

export default function HomePage() {


  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <>
      <Header title="EPSI" />
      <HeaderProps title="Paris" />
      <HeaderPropsLiteral title="SN2" />
      <HeaderPropsFunction title="Groupe 2" />
      <HeaderPropsFunction />
      <ul>
        {names.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <LikeButton/>
    </>
  );
}
