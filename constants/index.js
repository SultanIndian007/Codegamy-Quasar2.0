

export const mockProblemsData = [{
    "_id": {
      "$oid": "65813607db0ee3b9bc352d37"
    },
    "id": "two-sum",
    "title": "Two Sum",
    "problemStatement": "Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to</em> <code>target</code>.</p><p class='mt-3'>You may assume that each input would have <strong>exactly one solution</strong>, and youmay not use thesame element twice.<p class='mt-3'>You can return the answer in any order.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "nums = [2,7,11,15], target = 9",
        "outputText": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "id": 1,
        "inputText": "nums = [3,2,4], target = 6",
        "outputText": "[1,2]",
        "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        "id": 2,
        "inputText": " nums = [3,3], target = 6",
        "outputText": "[0,1]"
      }
    ],
    "constraints": "<li class='mt-2'><code>2 ≤ nums.length ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ nums[i] ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ target ≤ 10</code></li><li class='mt-2 text-sm'><strong>Only one valid answer exists.</strong></li>",
    "difficulty": "Easy",
    "category": "Array",
    "order": 1,
    "videoId": "8-k1C6ehKuw",
    "starterCode": "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
    "value": "8-k1C6ehKuw",
    "label": "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
    "testCase": {
      "input": [
        "[[2, 7, 11, 15], 9]",
        "[[3, 2, 4], 6]",
        "[[3, 3], 6]"
      ],
      "output": [
        "[0, 1]",
        "[1, 2]",
        "[0, 1]"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d38"
    },
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "problemStatement": "<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "head = [1,2,3,4,5]",
        "outputText": "[5,4,3,2,1]"
      },
      {
        "id": 1,
        "inputText": "head = [1,2,3]",
        "outputText": "[3,2,1]"
      },
      {
        "id": 2,
        "inputText": "head = [1]",
        "outputText": "[1]"
      }
    ],
    "constraints": "<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li><li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>",
    "difficulty": "Hard",
    "category": "Linked List",
    "order": 2,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\nclass ListNode:\n  def __init__(self, value=0, next=None):    \n    self.value = value\n    self.next = next\n\ndef reverse_linked_list(head):\n  prev = None\n  current = head\n  ''' Write your logic '''\n    \n\n# Function to convert a list to a linked list\ndef list_to_linked_list(lst):\n  if not lst:\n    return None\n\n  head = ListNode(lst[0])\n  current = head\n\n  for value in lst[1:]:\n    current.next = ListNode(value)\n    current = current.next\n\n  return head\n\n# Function to convert a linked list to a list\ndef linked_list_to_list(head):\n  result = []\n  while head:\n    result.append(head.value)\n    head = head.next\n  return result\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for i in nums:\n      input_head = list_to_linked_list(i)\n      reversed_head = reverse_linked_list(input_head)\n      output_list = linked_list_to_list(reversed_head)\n      print(output_list)\n            \n  else:\n    \n    # Example usage:\n    input_list = [1, 2, 3, 4, 5]\n\n    # Convert the input list to a linked list\n    input_head = list_to_linked_list(input_list)\n\n    # Reverse the linked list\n    reversed_head = reverse_linked_list(input_head)\n\n    # Convert the reversed linked list to a list\n    output_list = linked_list_to_list(reversed_head)\n\n    print(output_list)",
    "value": "",
    "label": "import ast\nimport sys\n\nclass ListNode:\n  def __init__(self, value=0, next=None):    \n    self.value = value\n    self.next = next\n\ndef reverse_linked_list(head):\n  prev = None\n  current = head\n  ''' Write your logic '''\n    \n\n# Function to convert a list to a linked list\ndef list_to_linked_list(lst):\n  if not lst:\n    return None\n\n  head = ListNode(lst[0])\n  current = head\n\n  for value in lst[1:]:\n    current.next = ListNode(value)\n    current = current.next\n\n  return head\n\n# Function to convert a linked list to a list\ndef linked_list_to_list(head):\n  result = []\n  while head:\n    result.append(head.value)\n    head = head.next\n  return result\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for i in nums:\n      input_head = list_to_linked_list(i)\n      reversed_head = reverse_linked_list(input_head)\n      output_list = linked_list_to_list(reversed_head)\n      print(output_list)\n            \n  else:\n    \n    # Example usage:\n    input_list = [1, 2, 3, 4, 5]\n\n    # Convert the input list to a linked list\n    input_head = list_to_linked_list(input_list)\n\n    # Reverse the linked list\n    reversed_head = reverse_linked_list(input_head)\n\n    # Convert the reversed linked list to a list\n    output_list = linked_list_to_list(reversed_head)\n\n    print(output_list)",
    "testCase": {
      "input": [
        "[2, 7, 11, 15]",
        "[1,2]",
        "[0]"
      ],
      "output": [
        "[15, 11, 7, 2]",
        "[2, 1]",
        "[0]"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d39"
    },
    "id": "jump-game",
    "title": "Jump Game",
    "problemStatement": "<p class='mt-3'>You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>and each element in the array represents your maximum jump length at that position.</p><p class='mt-3'>Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "nums = [2,3,1,1,4]",
        "outputText": "true",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "id": 1,
        "inputText": "nums = [3,2,1,0,4]",
        "outputText": "false",
        "explanation": "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
      }
    ],
    "constraints": "<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li><li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>",
    "difficulty": "Medium",
    "category": "Dynamic Programming",
    "order": 3,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef can_jump(nums):\n  '''Write Your Logic'''\n\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as integers\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = can_jump(i)\n      print(result)\n                        \n  else:\n    nums = [2, 3, 1, 1, 4]\n    result = can_jump(nums)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef can_jump(nums):\n  '''Write Your Logic'''\n\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as integers\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = can_jump(i)\n      print(result)\n                        \n  else:\n    nums = [2, 3, 1, 1, 4]\n    result = can_jump(nums)\n    print(result)\n",
    "testCase": {
      "input": [
        "[2,3,1,1,4]",
        "[3,2,1,0,4]"
      ],
      "output": [
        "True",
        "False"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3a"
    },
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "problemStatement": "<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li><li class='mt-3'>Every close bracket has a corresponding open bracket of the same type. </li></ul>",
    "examples": [
      {
        "id": 0,
        "inputText": "s = ()",
        "outputText": "True"
      },
      {
        "id": 1,
        "inputText": "s = ()[]{}",
        "outputText": "True"
      },
      {
        "id": 2,
        "inputText": "s = (]",
        "outputText": "False"
      },
      {
        "id": 3,
        "inputText": "s = ([)]",
        "outputText": "False"
      }
    ],
    "constraints": "<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li><li><class='mt-2 '><code>s</code> consists of parentheses only <code class='text-md'>'()[]{}'</code>.</li>",
    "difficulty": "Easy",
    "category": "Stack",
    "order": 4,
    "videoId": "xty7fr-k0TU",
    "starterCode": "import sys\n\ndef is_valid(s):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    nums = [(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = is_valid(i)\n      print(result)\n  else:\n    nums = \"({[]})\"\n    result = is_valid(nums)\n    print(result)\n",
    "value": "xty7fr-k0TU",
    "label": "import sys\n\ndef is_valid(s):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    nums = [(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = is_valid(i)\n      print(result)\n  else:\n    nums = \"({[]})\"\n    result = is_valid(nums)\n    print(result)\n",
    "testCase": {
      "input": [
        "()",
        "()[]{}",
        "(]"
      ],
      "output": [
        "True",
        "True",
        "False"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3b"
    },
    "id": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "problemStatement": "<p class='mt-3'>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p><li class='mt-3'>Integers in each row are sorted from left to right.</li><li class='mt-3'>The first integer of each row is greater than the last integer of the previous row.</li><p class='mt-3'>Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "outputText": "true"
      },
      {
        "id": 1,
        "inputText": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "outputText": "false"
      },
      {
        "id": 2,
        "inputText": "matrix = [[1]], target = 1",
        "outputText": "true"
      }
    ],
    "constraints": "<li class='mt-2'><code>m == matrix.length</code></li><li class='mt-2'><code>n == matrix[i].length</code></li><li class='mt-2'><code>1 <= m, n <= 100</code></li><li class='mt-2'><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "Binary Search",
    "order": 5,
    "videoId": "ZfFl4torNg4",
    "starterCode": "import ast\nimport sys\n\ndef search_matrix(matrix, target):\n  #Write Your Code\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    arg_pairs = [ast.literal_eval(arg) for arg in sys.argv[1:]]  \n    for arg_pair in arg_pairs:\n      matrix, target = arg_pair\n      matrix = [list(row) for row in matrix]  # Ensure each row is a list\n      target = int(target)\n      \n      result = search_matrix(matrix, target)\n      print(result)\n                        \n  else:\n    matrix = [\n              [1,3,5,7],[10,11,16,20],[23,30,34,60]\n       ]\n\n    target = 3\n    result = search_matrix(matrix, target)\n    print(result)\n",
    "value": "ZfFl4torNg4",
    "label": "import ast\nimport sys\n\ndef search_matrix(matrix, target):\n  #Write Your Code\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    arg_pairs = [ast.literal_eval(arg) for arg in sys.argv[1:]]  \n    for arg_pair in arg_pairs:\n      matrix, target = arg_pair\n      matrix = [list(row) for row in matrix]  # Ensure each row is a list\n      target = int(target)\n      \n      result = search_matrix(matrix, target)\n      print(result)\n                        \n  else:\n    matrix = [\n              [1,3,5,7],[10,11,16,20],[23,30,34,60]\n       ]\n\n    target = 3\n    result = search_matrix(matrix, target)\n    print(result)\n",
    "testCase": {
      "input": [
        "[[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3]",
        "[[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13]"
      ],
      "output": [
        "True",
        "False"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3c"
    },
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "problemStatement": "<p class='mt-3'>You are given an integer array <code>height</code> of length <code>n</code>. There are n vertical lines drawn such that the two endpoints of the <code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.<br>Find two lines that together with the x-axis form a container, such that the container contains the most water.<br>Return the maximum amount of water a container can store.<br><b>Notice</b> that you may not slant the container.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "height = [1,8,6,2,5,4,8,3,7]",
        "explanation": "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
        "outputText": "49"
      },
      {
        "id": 1,
        "inputText": "height =[1,1]",
        "outputText": "1"
      }
    ],
    "constraints": "<li class='mt-2'><code>n == height.length</code></li><li class='mt-2'><code>2 <= n <=10^5</code></li><li class='mt-2'><code>0 <= height[i] <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "order": 6,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef max_area(height):\n  max_area_value = 0\n  left = 0\n  right = len(height) - 1\n  ''' Write Your Logic '''\n\n\n  return max_area_value\n\n# Example usage:\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_area(i)\n      print(result)\n                        \n  else:\n    # Example Use\n    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]\n    result = max_area(height)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef max_area(height):\n  max_area_value = 0\n  left = 0\n  right = len(height) - 1\n  ''' Write Your Logic '''\n\n\n  return max_area_value\n\n# Example usage:\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_area(i)\n      print(result)\n                        \n  else:\n    # Example Use\n    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]\n    result = max_area(height)\n    print(result)\n",
    "testCase": {
      "input": [
        "[1, 8, 6, 2, 5, 4, 8, 3, 7]",
        "[1,1]"
      ],
      "output": [
        "49",
        "1"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3d"
    },
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "problemStatement": "<p class='mt-3'>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
        "outputText": "[[1,6],[8,10],[15,18]]"
      },
      {
        "id": 1,
        "inputText": "intervals = [[1,4],[4,5]]",
        "explanation": "Intervals [1,4] and [4,5] are considered overlapping.",
        "outputText": "[[1,5]]"
      }
    ],
    "constraints": "<li class='mt-2'><code>1 <== intervals.length <= 10<sup>4</sup></code></li><li class='mt-2'><code>intervals[i].length ==2</code></li><li class='mt-2'><code>0 <= start<sub>i</sub> <=end<sub>i</sub> <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "intervals",
    "order": 7,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\ndef merge(intervals):\n  #Write your logic    \n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = merge(i)\n      print(result)\n            \n  else:   \n    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]\n    result = merge(intervals)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\ndef merge(intervals):\n  #Write your logic    \n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = merge(i)\n      print(result)\n            \n  else:   \n    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]\n    result = merge(intervals)\n    print(result)\n",
    "testCase": {
      "input": [
        "[[1, 3], [2, 6], [8, 10], [15, 18]]",
        "[[1, 4], [4, 5]]"
      ],
      "output": [
        "[[1, 6], [8, 10], [15, 18]]",
        "[[1, 5]]"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3e"
    },
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "problemStatement": "<p class='mt-3'>Given the <code>root</code> of a binary tree, return <i>its maximum depth.</i><br> A binary tree's <b>maximum</b> depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "root = [3,9,20,null,null,15,7]",
        "outputText": "3"
      },
      {
        "id": 1,
        "inputText": "root = [1,null,2]",
        "outputText": "2"
      }
    ],
    "constraints": "<li class='mt-2'>The number of nodes in the tree is in the range<code>[0, 10<sup>4</sup>]</code></li><li class='mt-2'><code>-100 <= Node.val <= 100</code></li>",
    "difficulty": "Easy",
    "category": "Tree",
    "order": 8,
    "videoId": "4qYTqOiRMoM",
    "starterCode": "import ast\nimport sys\n\n\nclass TreeNode:\n  def __init__(self, value=0, left=None, right=None):\n    self.value = value\n    self.left = left\n    self.right = right\n\ndef list_to_tree(nodes):\n  if not nodes:\n    return None\n\n  root = TreeNode(nodes[0])\n  queue = [root]\n  i = 1\n\n  while i < len(nodes):\n    current = queue.pop(0)\n\n    if nodes[i] is not None:\n      current.left = TreeNode(nodes[i])\n      queue.append(current.left)\n      i += 1\n\n    if i < len(nodes) and nodes[i] is not None:\n      current.right = TreeNode(nodes[i])\n      queue.append(current.right)\n      i += 1\n\n  return root\n\ndef max_depth(root):\n    ''' Write Your Code '''\n\n\n\n\n\nif __name__ == \"__main__\":\n    \n  if len(sys.argv) > 1:       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      root = list_to_tree(i)\n      result = max_depth(root)\n      print(result)\n            \n  else:\n    input_list = [3, 9, 20, None, None, 15, 7]\n    root = list_to_tree(input_list)\n    result = max_depth(root)\n    print(result)\n        \n",
    "value": "4qYTqOiRMoM",
    "label": "import ast\nimport sys\n\n\nclass TreeNode:\n  def __init__(self, value=0, left=None, right=None):\n    self.value = value\n    self.left = left\n    self.right = right\n\ndef list_to_tree(nodes):\n  if not nodes:\n    return None\n\n  root = TreeNode(nodes[0])\n  queue = [root]\n  i = 1\n\n  while i < len(nodes):\n    current = queue.pop(0)\n\n    if nodes[i] is not None:\n      current.left = TreeNode(nodes[i])\n      queue.append(current.left)\n      i += 1\n\n    if i < len(nodes) and nodes[i] is not None:\n      current.right = TreeNode(nodes[i])\n      queue.append(current.right)\n      i += 1\n\n  return root\n\ndef max_depth(root):\n    ''' Write Your Code '''\n\n\n\n\n\nif __name__ == \"__main__\":\n    \n  if len(sys.argv) > 1:       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      root = list_to_tree(i)\n      result = max_depth(root)\n      print(result)\n            \n  else:\n    input_list = [3, 9, 20, None, None, 15, 7]\n    root = list_to_tree(input_list)\n    result = max_depth(root)\n    print(result)\n        \n",
    "testCode": {
      "input": [
        "[3, 9, 20, None, None, 15, 7]",
        "[1,None,2]"
      ],
      "output": [
        "3",
        "2"
      ]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3f"
    },
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "problemStatement": "<p class='mt-3'>You are given an array <code> prices </code> where  <code>prices[i] </code> is the price of a given stock on the  <code>i<sup>th</sup> </code> day.<br>You want to maximize your profit by choosing a <b>single day</b> to buy one stock and choosing a <b>different day in the future</b> to sell that stock.<br>Return <i>the maximum profit you can achieve from this transaction.</i> If you cannot achieve any profit, return <code>0</code>.</p>",
    "examples": [
      {
        "id": 0,
        "inputText": "prices = [7,1,5,3,6,4]",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
        "outputText": "5"
      },
      {
        "id": 1,
        "inputText": "prices = [7,6,4,3,1]",
        "explanation": "In this case, no transactions are done and the max profit = 0.",
        "outputText": "0"
      }
    ],
    "constraints": "<li class='mt-2'><code>1 <= prices.length <= 10<sup>5</sup></code></li><li class='mt-2'><code>0 <= prices[i] <= 10<sup>4</sup></code></li>",
    "difficulty": "Easy",
    "category": "Array",
    "order": 9,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef max_profit(prices):\n  if not prices or len(prices) < 2:\n    return 0\n\n    min_price = prices[0]\n    max_profit = 0\n\n    '''' Write Your Code '''\n    \n\n  return max_profit\n\n\n\n\nif __name__ == \"__main__\":\n \n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_profit(i)\n      print(result)\n            \n  else:\n    prices = [7, 1, 5, 3, 6, 4]\n    result = max_profit(prices)\n    print(result)\n ",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef max_profit(prices):\n  if not prices or len(prices) < 2:\n    return 0\n\n    min_price = prices[0]\n    max_profit = 0\n\n    '''' Write Your Code '''\n    \n\n  return max_profit\n\n\n\n\nif __name__ == \"__main__\":\n \n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_profit(i)\n      print(result)\n            \n  else:\n    prices = [7, 1, 5, 3, 6, 4]\n    result = max_profit(prices)\n    print(result)\n ",
    "testCase": {
      "Input": [
        "[7, 1, 5, 3, 6, 4]",
        "[7,6,4,3,1]"
      ],
      "OutPut": [
        "5",
        "0"
      ]
    }
  },
  {
    "_id": {
      "$oid": "6581aa6bdb0ee3b9bc352d46"
    },
    "id": "subsets",
    "title": "Subsets",
    "problemStatement": "<p class='mt-3'>Given an integer array nums of unique elements, return <i>all possible <span class='text-sky-400'>subsets</span>(the power set).</i> The solution set <b>must not</b> contain duplicate subsets. Return the solution in <b>any order.</b></p>",
    "examples": [
      {
        "id": 0,
        "inputText": "nums = [1,2,3]",
        "outputText": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      },
      {
        "id": 1,
        "inputText": "nums = [0]",
        "outputText": "[[],[0]]"
      }
    ],
    "constraints": "<li class='mt-2'><code>1 <= nums.length <= 10</code></li><li class='mt-2'><code>-10 <= num[i] <= 10</code></li><li class='mt-2'>All the numbers of <code>nums</code> are <b>unique</b>.</li>",
    "difficulty": "Medium",
    "category": "Backtracking",
    "order": 10,
    "videoId": "",
    "starterCode": "import sys\nimport ast\n\n\ndef subsets(nums):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = subsets(i)\n      print(result)\n            \n  else:\n    prices = [1, 2, 3]\n    result = subsets(prices)\n    print(result)\n        ",
    "value": "",
    "label": "import sys\nimport ast\n\n\ndef subsets(nums):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = subsets(i)\n      print(result)\n            \n  else:\n    prices = [1, 2, 3]\n    result = subsets(prices)\n    print(result)\n        ",
    "testCase": {
      "input": [
        "[1,2,3]",
        "[0]"
      ],
      "output": [
        "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        "[[], [0]]"
      ]
    }
  }];

export const languagesData = [
  {
    "id": "ada",
    "name": "Ada",
    "value": "ada",
    "label": "Ada",
  },
  {
    "id": "algol",
    "name": "Algol 68",
    "value": "algol",
    "label": "Algol 68",
  },
  {
    "id": "awk",
    "name": "AWK",
    "value": "awk",
    "label": "AWK",
  },
  {
    "id": "bash",
    "name": "Bash Shell",
    "value": "bash",
    "label": "Bash Shell",
  },
  {
    "id": "bc",
    "name": "BC",
    "value": "bc",
    "label": "BC",
  },
  {
    "id": "befunge",
    "name": "Befunge",
    "value": "befunge",
    "label": "Befunge",
  },
  {
    "id": "blockly",
    "name": "Blockly",
    "value": "blockly",
    "label": "Blockly",
  },
  {
    "id": "brainfuck",
    "name": "Brainf**k",
    "value": "brainfuck",
    "label": "Brainf**k",
  },
  {
    "id": "c",
    "name": "C",
    "value": "c",
    "label": "C",
  },
  {
    "id": "c99",
    "name": "C-99",
    "value": "c99",
    "label": "C-99",
  },
  {
    "id": "clisp",
    "name": "CLISP",
    "value": "clisp",
    "label": "CLISP",
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "value": "clojure",
    "label": "Clojure",
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "value": "cobol",
    "label": "COBOL",
  },
  {
    "id": "coffeescript",
    "name": "CoffeeScript",
    "value": "coffeescript",
    "label": "CoffeeScript",
  },
  {
    "id": "cpp",
    "name": "C++",
    "value": "cpp",
    "label": "C++",
  },
  {
    "id": "cpp14",
    "name": "C++ 14",
    "value": "cpp14",
    "label": "C++ 14",
  },
  {
    "id": "cpp17",
    "name": "C++ 17",
    "value": "cpp17",
    "label": "C++ 17",
  },
  {
    "id": "csharp",
    "name": "C#",
    "value": "csharp",
    "label": "C#",
  },
  {
    "id": "d",
    "name": "D",
    "value": "d",
    "label": "D",
  },
  {
    "id": "dart",
    "name": "Dart",
    "value": "dart",
    "label": "Dart",
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "value": "elixir",
    "label": "Elixir",
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "value": "erlang",
    "label": "Erlang",
  },
  {
    "id": "factor",
    "name": "Factor",
    "value": "factor",
    "label": "Factor",
  },
  {
    "id": "falcon",
    "name": "Falcon",
    "value": "falcon",
    "label": "Falcon",
  },
  {
    "id": "fantom",
    "name": "Fantom",
    "value": "fantom",
    "label": "Fantom",
  },
  {
    "id": "fasm",
    "name": "FASM",
    "value": "fasm",
    "label": "FASM",
  },
  {
    "id": "forth",
    "name": "Forth",
    "value": "forth",
    "label": "Forth",
  },
  {
    "id": "fortran",
    "name": "Fortran",
    "value": "fortran",
    "label": "Fortran",
  },
  {
    "id": "freebasic",
    "name": "FREE BASIC",
    "value": "freebasic",
    "label": "FREE BASIC",
  },
  {
    "id": "fsharp",
    "name": "F#",
    "value": "fsharp",
    "label": "F#",
  },
  {
    "id": "gccasm",
    "name": "Assembler - GCC",
    "value": "gccasm",
    "label": "Assembler - GCC",
  },
  {
    "id": "go",
    "name": "GO Lang",
    "value": "go",
    "label": "GO Lang",
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "value": "groovy",
    "label": "Groovy",
  },
  {
    "id": "hack",
    "name": "Hack",
    "value": "hack",
    "label": "Hack",
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "value": "haskell",
    "label": "Haskell",
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "value": "haxe",
    "label": "Haxe",
  },
  {
    "id": "icon",
    "name": "Icon",
    "value": "icon",
    "label": "Icon",
  },
  {
    "id": "intercal",
    "name": "Intercal",
    "value": "intercal",
    "label": "Intercal",
  },
  {
    "id": "java",
    "name": "Java",
    "value": "java",
    "label": "Java",
  },
  {
    "id": "jbang",
    "name": "JBang",
    "value": "jbang",
    "label": "JBang",
  },
  {
    "id": "jlang",
    "name": "J Language",
    "value": "jlang",
    "label": "J Language",
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "value": "kotlin",
    "label": "Kotlin",
  },
  {
    "id": "lolcode",
    "name": "LOLCODE",
    "value": "lolcode",
    "label": "LOLCODE",
  },
  {
    "id": "lua",
    "name": "Lua",
    "value": "lua",
    "label": "Lua",
  },
  {
    "id": "mozart",
    "name": "OZ Mozart",
    "value": "mozart",
    "label": "OZ Mozart",
  },
  {
    "id": "nasm",
    "name": "Assembler - NASM",
    "value": "nasm",
    "label": "Assembler - NASM",
  },
  {
    "id": "nemerle",
    "name": "Nemerle",
    "value": "nemerle",
    "label": "Nemerle",
  },
  {
    "id": "nim",
    "name": "Nim",
    "value": "nim",
    "label": "Nim",
  },
  {
    "id": "nodejs",
    "name": "NodeJS",
    "value": "nodejs",
    "label": "NodeJS",
  },
  {
    "id": "objc",
    "name": "Objective C",
    "value": "objc",
    "label": "Objective C",
  },
  {
    "id": "ocaml",
    "name": "Ocaml",
    "value": "ocaml",
    "label": "Ocaml",
  },
  {
    "id": "octave",
    "name": "Octave",
    "value": "octave",
    "label": "Octave",
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "value": "pascal",
    "label": "Pascal",
  },
  {
    "id": "perl",
    "name": "Perl",
    "value": "perl",
    "label": "Perl",
  },
  {
    "id": "php",
    "name": "PHP",
    "value": "php",
    "label": "PHP",
  },
  {
    "id": "picolisp",
    "name": "Picolisp",
    "value": "picolisp",
    "label": "Picolisp",
  },
  {
    "id": "pike",
    "name": "Pike",
    "value": "pike",
    "label": "Pike",
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "value": "prolog",
    "label": "Prolog",
  },
  {
    "id": "python2",
    "name": "Python 2",
    "value": "python2",
    "label": "Python 2",
  },
  {
    "id": "python3",
    "name": "Python 3",
    "value": "python3",
    "label": "Python 3",
  },
  {
    "id": "r",
    "name": "R Language",
    "value": "r",
    "label": "R Language",
  },
  {
    "id": "racket",
    "name": "Racket",
    "value": "racket",
    "label": "Racket",
  },
  {
    "id": "rhino",
    "name": "Rhino JS",
    "value": "rhino",
    "label": "Rhino JS",
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "value": "ruby",
    "label": "Ruby",
  },
  {
    "id": "rust",
    "name": "RUST",
    "value": "rust",
    "label": "RUST",
  },
  {
    "id": "scala",
    "name": "Scala",
    "value": "scala",
    "label": "Scala",
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "value": "scheme",
    "label": "Scheme",
  },
  {
    "id": "smalltalk",
    "name": "SmallTalk",
    "value": "smalltalk",
    "label": "SmallTalk",
  },
  {
    "id": "spidermonkey",
    "name": "SpiderMonkey",
    "value": "spidermonkey",
    "label": "SpiderMonkey",
  },
  {
    "id": "sql",
    "name": "SQL",
    "value": "sql",
    "label": "SQL",
  },
  {
    "id": "swift",
    "name": "Swift",
    "value": "swift",
    "label": "Swift",
  },
  {
    "id": "tcl",
    "name": "TCL",
    "value": "tcl",
    "label": "TCL",
  },
  {
    "id": "unlambda",
    "name": "Unlambda",
    "value": "unlambda",
    "label": "Unlambda",
  },
  {
    "id": "vbn",
    "name": "VB.Net",
    "value": "vbn",
    "label": "VB.Net",
  },
  {
    "id": "verilog",
    "name": "VERILOG",
    "value": "verilog",
    "label": "VERILOG",
  },
  {
    "id": "whitespace",
    "name": "Whitespace",
    "value": "whitespace",
    "label": "Whitespace",
  },
  {
    "id": "yabasic",
    "name": "YaBasic",
    "value": "yabasic",
    "label": "YaBasic",
  }
]