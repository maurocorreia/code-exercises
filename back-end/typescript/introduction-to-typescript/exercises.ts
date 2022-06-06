export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function losangle(major: number, minor: number): number{
    return (major * minor) / 2;
}

export function trapezium(major: number, minor: number, height: number): number{
    return ((major + minor) * height) / 2;
}

export function circle(radius: number){
    return (radius * radius) *  3.14;
}