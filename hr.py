arr = []
def solve(s):
    for i in s.split(" "):
        if i:
            arr.append(i[0].upper() + i[1:])
        else:
            arr.append('')
    return " ".join(arr)