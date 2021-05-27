import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkVpcSubnetsByAzBugStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'VPC', {
            cidr: '10.99.0.0/16',
            maxAzs: 2,
        });

        new cdk.CfnOutput(this, 'SubnetIdsUsingVpcAZ0', {
            value: vpc.selectSubnets({
                availabilityZones: [vpc.availabilityZones[0]],
            }).subnetIds.join(','),
        });
        new cdk.CfnOutput(this, 'SubnetIdsUsingVpcAZ1', {
            value: vpc.selectSubnets({
                availabilityZones: [vpc.availabilityZones[1]],
            }).subnetIds.join(','),
        });

        new cdk.CfnOutput(this, 'SubnetIdsUsingStackAZ0', {
            value: vpc.selectSubnets({
                availabilityZones: [this.availabilityZones[0]],
            }).subnetIds.join(','),
        });
        new cdk.CfnOutput(this, 'SubnetIdsUsingStackAZ1', {
            value: vpc.selectSubnets({
                availabilityZones: [this.availabilityZones[1]],
            }).subnetIds.join(','),
        });
    }
}
