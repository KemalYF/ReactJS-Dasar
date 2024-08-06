import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();

    return (
        <>
            <h1>ERROR BROTHER</h1>
            <p>{error.message}</p>
        </>
    );
}

export default ErrorPage;