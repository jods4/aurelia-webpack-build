export class UpperValueConverter {
  toView(name: string) {
    return name && name.toUpperCase();
  }
}