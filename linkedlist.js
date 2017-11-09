// utils to create linked list

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const create = module.exports.create = function (vals) {
    if (vals.length === 1) {
        return new ListNode(vals[0]);
    } else if (vals.length > 1) {
        const node = new ListNode(vals[0]);
        node.next = create(vals.slice(1));
        return node;
    }
    return null;
}

module.exports.format = function (head) {
    if (!head) {
        return '[empty]';
    }
    const nodes = [];
    let node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    return nodes
        .map(n => n.val)
        .join(' => ');
}