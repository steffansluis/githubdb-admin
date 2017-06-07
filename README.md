### Concept mapping
#### GIT
- Blobs ==> Values
- Trees ==> Changes in values, file/folder structure
- Commits ==> Buffer changes

#### File system
- Files ==> Are blobs, so are deduplicated
- Folders ==> Can be used as sets

#### Graph
- Nodes <==> Blobs
- Edges ==> File system structure

## Data without space and time
Without context data exists outside of space and time. Context adds structure and a baseline to measure change over time. The GIT object database allows us to store this data in a minimal fashion by storing it as blobs.

### Space - Data structures
Adding a space dimension to the data allows us to construct data structures. This comes down to relating  data to other data using trees. How this is done is relevant to the amount of tree/blob updates on a data change, but otherwise we can choose this ourselves.

### Time - Commits
Any combination of changes in trees and blobs can be captured in a commit. As such, the data changes over time can be captured using commits, as GIT intends.

## Working backwards
Ok, so at this point, our data model can be anything and commits are just commits. So then, how do we want our API to work? Well, we are building a database, so we might want to consider what kind of data model with allow us to query data efficiently using the GitHub API.

With the GitHub API we can get blobs, trees and commits and we can list commits. Also branches, but more on that later. Blobs are data. Might be useful, depending on the data model.

## Other stuff

Queries:
Give me the object with id 'id' ==>

Querying:
Given knowledge about the current state of the repo, a 'query' can be formulated.

Data updates:
Changing a triple subject/object results in a new blob and several tree updates. Changing a triple predicate results in 1 rename. Updating a node with n in-predicates and m out-predicates will create a new blob and do 1 + n tree updates. Updating an edge results 2 tree updates (or 1 rename).

One commit can reference one tree, which can reference any number of subtrees. As such, a commit can be seen as a model of some kind, combining relevant nodes and edges in context into information about something.

If commits are models, then branches are collections of models. As such, the branch 'thing' might contain things of type 'thing'. Going full circle, this can be encoded into the file system as:
thing/:commit_hash

The GIT object database contains all the nodes. The trees reference the edges by way of file system.

## Example

### Object:
```json
{
  "id": "id",
  "type": "thing",
  "name": "name"
}
```

### Triples:
- { subject: id, predicate: typeof, object: thing }
- { subject: id, predicate: name, object: name }

### Nodes:
- id
- thing
- name

### Edges:
- typeof
- name

### File system:
- types/thing/:id_blob_hash


- edges/:id_blob_hash/typeof/:thing_blob_hash
- edges/:id_blob_hash/name/:name_blob_hash
