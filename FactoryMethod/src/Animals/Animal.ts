export default abstract class Animal {
    position: number = 0

    move(distance: number = 0): void {
        this.position += distance
    }
}