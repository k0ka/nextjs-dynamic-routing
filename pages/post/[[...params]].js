import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'

const Post = () => {
    const router = useRouter()
    const { params = [] } = router.query;

    if (typeof params === 'string'){
        return (
            <>
                <Header />
                <h1>Params is a string</h1>
                <span>{params}</span>
            </>
        )
    }

    return (
        <>
            <Header />
            <h1>Params is an array. Length {params.length}</h1>
            <ul>
                {params.map(value => (
                    <li id={value}>
                        {value}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Post
