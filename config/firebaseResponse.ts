export function handleResponse(
  type: 'sucess' | 'error',
  message: string,
  errorCode ?: string
) {
  if (type === 'sucess') {
    return  {
      data: {
        sucess: message
      }
    }
  } else {
    return  {
      data: {
        error: errorCode,
        message: message
      }
    }
  }
}