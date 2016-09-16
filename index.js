function getFirstSelector(selector)
{
  //accepts a selector, returns first element that matches
  return document.querySelector(selector);
}

function nestedTarget()
{
  //pulls a .target out of nested
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n)
{
  //calls ranked list from app
  var ranks = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  //iterates through rank, parses numbers, increases number by n.
  for(var i = 0; i < ranks.length; i++)
  {
    var num = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = (num + n);
  }
}

function deepestChild()
{
  //establishes variable node from grand node div
  var nodes = document.querySelector("#grand-node").querySelectorAll("div");
  for(var i = 0; i < nodes.length; i++)
  {
    return nodes[i];
  }
}
