// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LocalObjectReference } from './V1LocalObjectReference';

/**
 * Represents a cloud-init nocloud user data source. More info: http://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html
 * @export
 * @interface V1CloudInitNoCloudSource
 */
export interface V1CloudInitNoCloudSource {
  /**
   * NetworkData contains NoCloud inline cloud-init networkdata. + optional
   * @type {string}
   * @memberof V1CloudInitNoCloudSource
   */
  networkData?: string;
  /**
   * NetworkDataBase64 contains NoCloud cloud-init networkdata as a base64 encoded string. + optional
   * @type {string}
   * @memberof V1CloudInitNoCloudSource
   */
  networkDataBase64?: string;
  /**
   *
   * @type {V1LocalObjectReference}
   * @memberof V1CloudInitNoCloudSource
   */
  networkDataSecretRef?: V1LocalObjectReference;
  /**
   *
   * @type {V1LocalObjectReference}
   * @memberof V1CloudInitNoCloudSource
   */
  secretRef?: V1LocalObjectReference;
  /**
   * UserData contains NoCloud inline cloud-init userdata. + optional
   * @type {string}
   * @memberof V1CloudInitNoCloudSource
   */
  userData?: string;
  /**
   * UserDataBase64 contains NoCloud cloud-init userdata as a base64 encoded string. + optional
   * @type {string}
   * @memberof V1CloudInitNoCloudSource
   */
  userDataBase64?: string;
}