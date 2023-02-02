const showErr = (mess: string): never => {
    throw new Error(mess)
}

showErr("something gone wrong")