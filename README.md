# cdk-vpc-subnets-by-az-bug

An attempt to replicate what might be a CDK bug.

## Steps

Install:

```
npm ci
```

Run:

```
./get_outputs.sh
```

This will print something like:
```json
{
  "SubnetIdsUsingVpcAZ0": {
    "Value": {
      "Ref": "VPCPrivateSubnet1Subnet8BCA10E0"
    }
  },
  "SubnetIdsUsingVpcAZ1": {
    "Value": {
      "Ref": "VPCPrivateSubnet2SubnetCFCDAA7A"
    }
  },
  "SubnetIdsUsingStackAZ0": {
    "Value": ""
  },
  "SubnetIdsUsingStackAZ1": {
    "Value": ""
  }
}
```

The first too are good, they are indeed subnets. This is what I'd
expect. The second two are blank, which is not what I'd expect. It is
not clear to me why these ways of selected subnets end up with
different results.

See [the source](lib/cdk-vpc-subnets-by-az-bug-stack.ts) for how these
are selected.
