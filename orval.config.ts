export default {
    backend: {
        input: 'http://localhost:8080/posts/api-docs',
        output: {
            mode: 'tags-split',
            target: 'src/openapi/question/api',
            schemas: 'src/openapi/question/model',
            client: 'react-query',
            mock: false,
            override: {
                mutator: {
                    path: './src/axios.ts',
                    name: 'axiosInstance',
                },
                query: {
                    useQuery: true,
                    signal: true,
                },
            },
        },
    }
};