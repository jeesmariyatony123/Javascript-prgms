s = "dear"
t = "read"
iscrt = false
s_split = s.split('')
t_split = t.split('')
// console.log(s_split);
if (s_split.length === t_split.length) {
    reversed = t_split.reverse()
    // console.log(reversed);
}
for (i = 0; i < s_split.length; i++) {
    if (s_split[i] === reversed[i]) {
        iscrt = true
    }
    else {
        iscrt = false
    }
}
console.log(iscrt ? "true" : "false");
