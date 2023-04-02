function a (coll, value, start = 0, end = coll.length - 1) {
    for (let i = start; i < end; i += 1){
      coll[i] = value;
      console.log(coll)
    }
    return coll
  }

  a([1,2,3,4,5],'*', 1, 3)