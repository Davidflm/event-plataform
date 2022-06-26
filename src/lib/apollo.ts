import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    //
    //uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master',
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4ohibtg03rl01xnbt6xhssa/master',
    //uri: import.meta.env.VITE_API_URL,
    //headers: {
    //    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    //},
    cache: new InMemoryCache()
})