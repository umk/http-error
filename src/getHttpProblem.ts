import HttpProblem, { INTERNAL_SERVER_ERROR } from './HttpProblem'

function getHttpProblem(value: HttpProblem | Error): HttpProblem {
  if (value instanceof Error) {
    if ('toHttpProblem' in value && value.toHttpProblem instanceof Function) {
      return value.toHttpProblem() as HttpProblem
    }
    return INTERNAL_SERVER_ERROR
  } else {
    return value
  }
}

export default getHttpProblem
