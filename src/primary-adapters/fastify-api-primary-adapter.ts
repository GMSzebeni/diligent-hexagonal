import fastify from 'fastify';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'
import { GreetingService, ProvideNamePrimaryPort } from '../business/greeting-service';

export default function createApp(options = {}, greetingService: ProvideNamePrimaryPort) {
  const app = fastify(options).withTypeProvider<JsonSchemaToTsProvider>();

  const postGreetingSchema = {
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        }        
      },
      required: ['name'],
      additionalProperties: false
    }
  } as const

  app.get('/hello', async () => {
    return { hello: 'World!' }
  })

  app.post(
    '/greet', 
    { schema: postGreetingSchema },
    async (request, reply) => {
      const { name } = request.body;

      if (name === "") {
        return reply.status(400).send("Please privide a name!");
      }

      const greeting = greetingService.greet(name);

      const greetingObj = { "greeting": greeting };

      return reply.status(200).send(greetingObj)
    }
  )

  return app;
}