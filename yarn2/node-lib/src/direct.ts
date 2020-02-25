// The point of this module is to try to import it directly
// from another package by name
// since this .ts file is actually the source, not the output
// we'll need the system to be smart enough to map from output back to source
// I believe that typescript is capable of this via the project references
// So if it is, we'll want to make sure that fusebox is also able to.

export function direct() {
    return "direct imported";
}
