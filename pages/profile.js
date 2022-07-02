import Link from "next/link";
import Nav from "../components/nav";
export default function Profile() {
  return (
    <>
      <Nav></Nav>
      <h1>Hello my name is Ariel. Welcome to profile.</h1>
      <Link href="/">
        <a>
          <button type="button" className="btn btn-sm btn-primary">
            Back to Home
          </button>
        </a>
      </Link>
    </>
  );
}
