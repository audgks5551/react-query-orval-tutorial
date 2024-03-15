import {useCreate, useFindAll} from "@/openapi/question/api/posts/posts.ts";

function App() {
    const {isLoading, data, refetch} = useFindAll({
            page: 0,
        },
        {
            query: {
                queryKey: ['App']
            }
        });

    console.log(data);

    const {mutate} = useCreate({
        mutation: {
            onSuccess: async () => {
                console.log("성공")
                await refetch();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    })

    if (isLoading) {
        return <div>로딩중</div>
    }

    return (
        <>
            <button type="button" onClick={() => mutate({
                data: {
                    title: "안녕하세요",
                    content: "내용1",
                }
            })}>생성</button>

            {data?.map(post => {
                return (
                    <div>
                        <div>
                            {post.id}
                        </div>
                        <div>
                            {post.title}
                        </div>
                        <div>
                            {post.content}
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default App
