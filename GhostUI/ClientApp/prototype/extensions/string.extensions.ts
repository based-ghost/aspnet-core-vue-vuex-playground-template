interface String {
    isEmpty(): boolean;
    isIn(...args: any[]): boolean;
    isEmptyOrWhiteSpace(): boolean;
}

String.prototype.isEmpty = function (): boolean {
    return (!this || 0 === this.length);
};

String.prototype.isEmptyOrWhiteSpace = function (): boolean {
    return (!this || 0 === this.length || !this.trim());
};

String.prototype.isIn = function (...args: any[]): boolean {
    if (!this || 0 === this.length) {
        return false;
    }

    for (var i = 0; i < args.length; i++) {
        if (args[i] == this)
            return true;
    }

    return false;
};