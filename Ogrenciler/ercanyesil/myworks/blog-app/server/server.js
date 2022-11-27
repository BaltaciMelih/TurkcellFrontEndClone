const {ApolloServer, gql} = require('apollo-server');
const qgl = require('graphql-tag');
const { default: mongoose } = require('mongoose');

const articleModel = require('./models/articleModel');

const DB_URL='mongodb+srv://yesil:1258@blogcluster.uec9snt.mongodb.net/blogDB?retryWrites=true&w=majority'

const typeDefs=gql`
    type Article{
        id:ID!,
        title:String!,
        contents:String!
    }
    type Query{
        articlesBring:[Article]!,
        articleBring(id:ID!):Article!
    }

    type Mutation{
        createArticle(title:String!,contents:String!):Article!          
    }
`;

const resolvers ={
    Query:{
        async articlesBring(){
            const articles = await articleModel.find();
            return articles;
        },
        async articleBring(parent,args){
            try {
                const {id}=args;
                
                return await articleModel.findById(id);
            } catch (error) {
                throw new error
            }
        }
    },
    Mutation:{
        createArticle:async (parent,args)=>{
            try {
                const article={
                    title:args.title,
                    contents:args.contents
                };
                return await articleModel.create(article);
            } catch (error) {
                throw new error;
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('mongodb bağlantısını başarılı');
    return server.listen({port:5000})
}).then((res)=>{
    console.log(`server ${res.url} çalışıyor`);
})