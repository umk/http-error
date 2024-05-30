import HttpProblem from './HttpProblem'

class HttpError extends Error {
  private readonly problem: HttpProblem
  constructor(problem: HttpProblem, message?: string) {
    super(message || problem.detail)
    this.problem = {
      ...problem,
      ...(message && { detail: message }),
    }

    Object.setPrototypeOf(this, Error.prototype)
  }
  toHttpProblem(): HttpProblem {
    return this.problem
  }
}

export default HttpError
