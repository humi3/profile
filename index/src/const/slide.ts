interface Ipath {
  path: string;
  name: string;
}

const info: Ipath = {
  path: '/',
  name: '/'
}
const work: Ipath = {
  path: '/work',
  name: 'work'
}
const hobby: Ipath = {
  path: '/hobby',
  name: 'hobby'
}
const etc: Ipath = {
  path: '/etc',
  name: 'etc'
}
const last: Ipath = {
  path: '/last',
  name: 'last'
}

export class Pages {
  public getPages(): Ipath[] {
    return [info, work, hobby, etc, last];
  }
}