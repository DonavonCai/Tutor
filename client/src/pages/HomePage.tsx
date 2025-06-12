import { ReactElement } from "react";
import { Page } from "./Page";
import { Link } from "react-router";

export function HomePage(): ReactElement {
    return (
        <Page>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </Page>
    );
}
