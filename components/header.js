import Link from 'next/link'

const Header = () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
        </ul>
        <div>Without as</div>
        <ul>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: []}
                    }}
                >
                    <a>No parameters</a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: ['1']}
                    }}
                >
                    <a>One parameter</a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: ['1', '2']}
                    }}
                >
                    <a>Two parameters</a>
                </Link>
            </li>
        </ul>
        <div>As human-readable</div>
        <ul>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: []}
                    }}
                    as={"/human-readable"}
                >
                    <a>No parameters</a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: ['1']}
                    }}
                    as={"/human-readable"}
                >
                    <a>One parameter</a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: "/post/[[...params]]",
                        query: {params: ['1', '2']}
                    }}
                    as={"/human-readable"}
                >
                    <a>Two parameters</a>
                </Link>
            </li>
        </ul>
    </header>
)

export default Header
