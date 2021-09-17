/*
 * Manager+Agents API
 * Signiant Manager+Agents provides a REST API to automate user management, user group, agent groups, jobs, resource controls, and job groups. 
 *
 * OpenAPI spec version: 14.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageragentsApi) {
      root.ManageragentsApi = {};
    }
    root.ManageragentsApi.JobArgs = factory(root.ManageragentsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobArgs model module.
   * @module model/JobArgs
   * @version 14.1.0
   */

  /**
   * Constructs a new <code>JobArgs</code>.
   * Set job arguments. Each job argument corresponds to the related section in the **Add/Edit Job** window in the Manager
   * @alias module:model/JobArgs
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JobArgs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobArgs} obj Optional instance to populate.
   * @return {module:model/JobArgs} The populated <code>JobArgs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging.EmailBcc'))
        obj.objectUploaderNotificationAndLoggingEmailBcc = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging.EmailBcc'], 'String');
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging.EmailCc'))
        obj.objectUploaderNotificationAndLoggingEmailCc = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging.EmailCc'], 'String');
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging.EmailTo'))
        obj.objectUploaderNotificationAndLoggingEmailTo = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging.EmailTo'], 'String');
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging.EmailCondition'))
        obj.objectUploaderNotificationAndLoggingEmailCondition = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging.EmailCondition'], 'String');
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging._sp_log_severity'))
        obj.objectUploaderNotificationAndLoggingSpLogSeverity = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging._sp_log_severity'], 'String');
      if (data.hasOwnProperty('ObjectUploader.NotificationAndLogging.emailJobFailureReportTo'))
        obj.objectUploaderNotificationAndLoggingEmailJobFailureReportTo = ApiClient.convertToType(data['ObjectUploader.NotificationAndLogging.emailJobFailureReportTo'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Options._sp_encryption'))
        obj.objectUploaderOptionsSpEncryption = ApiClient.convertToType(data['ObjectUploader.Options._sp_encryption'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Options.deliveryMode'))
        obj.objectUploaderOptionsDeliveryMode = ApiClient.convertToType(data['ObjectUploader.Options.deliveryMode'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule._sp_frequency'))
        obj.objectUploaderScheduleSpFrequency = ApiClient.convertToType(data['ObjectUploader.Schedule._sp_frequency'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule._sp_interrupt_on_failure'))
        obj.objectUploaderScheduleSpInterruptOnFailure = ApiClient.convertToType(data['ObjectUploader.Schedule._sp_interrupt_on_failure'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule._sp_start_at'))
        obj.objectUploaderScheduleSpStartAt = ApiClient.convertToType(data['ObjectUploader.Schedule._sp_start_at'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule.finishBefore'))
        obj.objectUploaderScheduleFinishBefore = ApiClient.convertToType(data['ObjectUploader.Schedule.finishBefore'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule.priority'))
        obj.objectUploaderSchedulePriority = ApiClient.convertToType(data['ObjectUploader.Schedule.priority'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Schedule.timezone'))
        obj.objectUploaderScheduleTimezone = ApiClient.convertToType(data['ObjectUploader.Schedule.timezone'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.ExcludeFiles'))
        obj.objectUploaderSourceExcludeFiles = ApiClient.convertToType(data['ObjectUploader.Source.ExcludeFiles'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.ExcludeSubDirList'))
        obj.objectUploaderSourceExcludeSubDirList = ApiClient.convertToType(data['ObjectUploader.Source.ExcludeSubDirList'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.ExcludeSubdirectories'))
        obj.objectUploaderSourceExcludeSubdirectories = ApiClient.convertToType(data['ObjectUploader.Source.ExcludeSubdirectories'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.FileReadinessCheckDelay'))
        obj.objectUploaderSourceFileReadinessCheckDelay = ApiClient.convertToType(data['ObjectUploader.Source.FileReadinessCheckDelay'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.FileReadinessCheckType'))
        obj.objectUploaderSourceFileReadinessCheckType = ApiClient.convertToType(data['ObjectUploader.Source.FileReadinessCheckType'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.IncludeFiles'))
        obj.objectUploaderSourceIncludeFiles = ApiClient.convertToType(data['ObjectUploader.Source.IncludeFiles'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.SourceAgent'))
        obj.objectUploaderSourceSourceAgent = ApiClient.convertToType(data['ObjectUploader.Source.SourceAgent'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.SourceData'))
        obj.objectUploaderSourceSourceData = ApiClient.convertToType(data['ObjectUploader.Source.SourceData'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.sourceDeletionsAfterSuccessfulTransfer'))
        obj.objectUploaderSourceSourceDeletionsAfterSuccessfulTransfer = ApiClient.convertToType(data['ObjectUploader.Source.sourceDeletionsAfterSuccessfulTransfer'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Source.sourceDirectoriestoExcludefromDeletionScan'))
        obj.objectUploaderSourceSourceDirectoriestoExcludefromDeletionScan = ApiClient.convertToType(data['ObjectUploader.Source.sourceDirectoriestoExcludefromDeletionScan'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Target.targetAgent'))
        obj.objectUploaderTargetTargetAgent = ApiClient.convertToType(data['ObjectUploader.Target.targetAgent'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Target.targetObjectStorage'))
        obj.objectUploaderTargetTargetObjectStorage = ApiClient.convertToType(data['ObjectUploader.Target.targetObjectStorage'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.BandwidthCeiling'))
        obj.objectUploaderTransportBandwidthCeiling = ApiClient.convertToType(data['ObjectUploader.Transport.BandwidthCeiling'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.BandwidthFloor'))
        obj.objectUploaderTransportBandwidthFloor = ApiClient.convertToType(data['ObjectUploader.Transport.BandwidthFloor'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.BandwidthThrottleByTimeOfDay'))
        obj.objectUploaderTransportBandwidthThrottleByTimeOfDay = ApiClient.convertToType(data['ObjectUploader.Transport.BandwidthThrottleByTimeOfDay'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.UseWANAccelerator'))
        obj.objectUploaderTransportUseWANAccelerator = ApiClient.convertToType(data['ObjectUploader.Transport.UseWANAccelerator'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport._sp_udp'))
        obj.objectUploaderTransportSpUdp = ApiClient.convertToType(data['ObjectUploader.Transport._sp_udp'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.simultaneousTransferStreams'))
        obj.objectUploaderTransportSimultaneousTransferStreams = ApiClient.convertToType(data['ObjectUploader.Transport.simultaneousTransferStreams'], 'String');
      if (data.hasOwnProperty('ObjectUploader.Transport.wANAcceleratorAggressiveness'))
        obj.objectUploaderTransportWANAcceleratorAggressiveness = ApiClient.convertToType(data['ObjectUploader.Transport.wANAcceleratorAggressiveness'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
    }
    return obj;
  }

  /**
   * BCC email notification recipients
   * @member {String} objectUploaderNotificationAndLoggingEmailBcc
   */
  exports.prototype.objectUploaderNotificationAndLoggingEmailBcc = undefined;

  /**
   * CC email notification recipients
   * @member {String} objectUploaderNotificationAndLoggingEmailCc
   */
  exports.prototype.objectUploaderNotificationAndLoggingEmailCc = undefined;

  /**
   * Primary email notification recipients
   * @member {String} objectUploaderNotificationAndLoggingEmailTo
   */
  exports.prototype.objectUploaderNotificationAndLoggingEmailTo = undefined;

  /**
   * Set when job email notifications are sent.
   * @member {module:model/JobArgs.ObjectUploaderNotificationAndLoggingEmailConditionEnum} objectUploaderNotificationAndLoggingEmailCondition
   */
  exports.prototype.objectUploaderNotificationAndLoggingEmailCondition = undefined;

  /**
   * Set the logging level for the job.
   * @member {module:model/JobArgs.ObjectUploaderNotificationAndLoggingSpLogSeverityEnum} objectUploaderNotificationAndLoggingSpLogSeverity
   */
  exports.prototype.objectUploaderNotificationAndLoggingSpLogSeverity = undefined;

  /**
   * Job failure email notification recipients
   * @member {String} objectUploaderNotificationAndLoggingEmailJobFailureReportTo
   */
  exports.prototype.objectUploaderNotificationAndLoggingEmailJobFailureReportTo = undefined;

  /**
   * Encryption level as set in the Advanced Options section
   * @member {module:model/JobArgs.ObjectUploaderOptionsSpEncryptionEnum} objectUploaderOptionsSpEncryption
   */
  exports.prototype.objectUploaderOptionsSpEncryption = undefined;

  /**
   * Set the transfer delivery mode - `yes` - Certify file delivery and log all file names and allow file search in the Manager interface - `unsigned` - Log names of the files transferred - `no` - Use temporary work files during transfer, allowing an interrupted transfer to resume from where the interruption occurred - `fast` - Do not use temporary work files, transfer the files as fast as possible
   * @member {module:model/JobArgs.ObjectUploaderOptionsDeliveryModeEnum} objectUploaderOptionsDeliveryMode
   */
  exports.prototype.objectUploaderOptionsDeliveryMode = undefined;

  /**
   * Set how frequently the job runs For more information, see [Job Scheduling](https://developer.signiant.com/manager-agents/job-scheduling.html#job-frequency).
   * @member {String} objectUploaderScheduleSpFrequency
   */
  exports.prototype.objectUploaderScheduleSpFrequency = undefined;

  /**
   * Set whether to halt the job immediately and display an alarm on the Manager interface if the job fails
   * @member {String} objectUploaderScheduleSpInterruptOnFailure
   */
  exports.prototype.objectUploaderScheduleSpInterruptOnFailure = undefined;

  /**
   * The scheduled start date and time for the job
   * @member {String} objectUploaderScheduleSpStartAt
   */
  exports.prototype.objectUploaderScheduleSpStartAt = undefined;

  /**
   * The scheduled time the job must finish before
   * @member {String} objectUploaderScheduleFinishBefore
   */
  exports.prototype.objectUploaderScheduleFinishBefore = undefined;

  /**
   * The job priority level For more informaton, see [Job Scheduling](https://developer.signiant.com/manager-agents/job-scheduling.html#job-priority)
   * @member {String} objectUploaderSchedulePriority
   */
  exports.prototype.objectUploaderSchedulePriority = undefined;

  /**
   * The Manager time zone
   * @member {String} objectUploaderScheduleTimezone
   */
  exports.prototype.objectUploaderScheduleTimezone = undefined;

  /**
   * Exclude files from a job based on [file patterns](https://help.signiant.com/manager-agents/jobs/object-mover/advanced-configuration#file-patterns)
   * @member {String} objectUploaderSourceExcludeFiles
   */
  exports.prototype.objectUploaderSourceExcludeFiles = undefined;

  /**
   * List of subfolders to exclude from a job when using `Specified` for the `ExcludeSubdirectories` argument.
   * @member {String} objectUploaderSourceExcludeSubDirList
   */
  exports.prototype.objectUploaderSourceExcludeSubDirList = undefined;

  /**
   * Set whether to exclude subdirectories from the job
   * @member {module:model/JobArgs.ObjectUploaderSourceExcludeSubdirectoriesEnum} objectUploaderSourceExcludeSubdirectories
   */
  exports.prototype.objectUploaderSourceExcludeSubdirectories = undefined;

  /**
   * Time in seconds to wait before completing a file readiness check
   * @member {String} objectUploaderSourceFileReadinessCheckDelay
   */
  exports.prototype.objectUploaderSourceFileReadinessCheckDelay = undefined;

  /**
   * @member {module:model/JobArgs.ObjectUploaderSourceFileReadinessCheckTypeEnum} objectUploaderSourceFileReadinessCheckType
   */
  exports.prototype.objectUploaderSourceFileReadinessCheckType = undefined;

  /**
   * The file pattern to include
   * @member {String} objectUploaderSourceIncludeFiles
   */
  exports.prototype.objectUploaderSourceIncludeFiles = undefined;

  /**
   * @member {String} objectUploaderSourceSourceAgent
   */
  exports.prototype.objectUploaderSourceSourceAgent = undefined;

  /**
   * The `siglist` XML path to the source data
   * @member {String} objectUploaderSourceSourceData
   */
  exports.prototype.objectUploaderSourceSourceData = undefined;

  /**
   * @member {module:model/JobArgs.ObjectUploaderSourceSourceDeletionsAfterSuccessfulTransferEnum} objectUploaderSourceSourceDeletionsAfterSuccessfulTransfer
   */
  exports.prototype.objectUploaderSourceSourceDeletionsAfterSuccessfulTransfer = undefined;

  /**
   * Files to exclude from deletion after transfer
   * @member {String} objectUploaderSourceSourceDirectoriestoExcludefromDeletionScan
   */
  exports.prototype.objectUploaderSourceSourceDirectoriestoExcludefromDeletionScan = undefined;

  /**
   * @member {String} objectUploaderTargetTargetAgent
   */
  exports.prototype.objectUploaderTargetTargetAgent = undefined;

  /**
   * @member {String} objectUploaderTargetTargetObjectStorage
   */
  exports.prototype.objectUploaderTargetTargetObjectStorage = undefined;

  /**
   * Maximumum amount of bandwidth usage for this job 0 indicates unlimited
   * @member {String} objectUploaderTransportBandwidthCeiling
   */
  exports.prototype.objectUploaderTransportBandwidthCeiling = undefined;

  /**
   * Minimum amount of bandwidth usage for this job 0 indicates unlimited
   * @member {String} objectUploaderTransportBandwidthFloor
   */
  exports.prototype.objectUploaderTransportBandwidthFloor = undefined;

  /**
   * Time of day and days the week to set a maximum transfer rate.  **Format:** <start-time>;<end-time>;<days-of-the-week>;<bit-rate>  Days of the week are ordered Saturday to Sunday Use Y/N to enable or disable the bandwidth throttle for that day
   * @member {String} objectUploaderTransportBandwidthThrottleByTimeOfDay
   */
  exports.prototype.objectUploaderTransportBandwidthThrottleByTimeOfDay = undefined;

  /**
   * @member {String} objectUploaderTransportUseWANAccelerator
   */
  exports.prototype.objectUploaderTransportUseWANAccelerator = undefined;

  /**
   * @member {String} objectUploaderTransportSpUdp
   */
  exports.prototype.objectUploaderTransportSpUdp = undefined;

  /**
   * @member {String} objectUploaderTransportSimultaneousTransferStreams
   */
  exports.prototype.objectUploaderTransportSimultaneousTransferStreams = undefined;

  /**
   * Set the [WAN Accelerator Aggressiveness level](https://help.signiant.com/manager-agents/jobs/object-mover/advanced-configuration/#wan-acceleration)
   * @member {String} objectUploaderTransportWANAcceleratorAggressiveness
   */
  exports.prototype.objectUploaderTransportWANAcceleratorAggressiveness = undefined;

  /**
   * Additional notes about the job
   * @member {String} notes
   */
  exports.prototype.notes = undefined;



  /**
   * Allowed values for the <code>objectUploaderNotificationAndLoggingEmailCondition</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderNotificationAndLoggingEmailConditionEnum = {
    /**
     * value: "Always"
     * @const
     */
    always: "Always",

    /**
     * value: "Always Exclude Empty Transfers"
     * @const
     */
    alwaysExcludeEmptyTransfers: "Always Exclude Empty Transfers",

    /**
     * value: "On transfer"
     * @const
     */
    onTransfer: "On transfer",

    /**
     * value: "Never"
     * @const
     */
    never: "Never"
  };


  /**
   * Allowed values for the <code>objectUploaderNotificationAndLoggingSpLogSeverity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderNotificationAndLoggingSpLogSeverityEnum = {
    /**
     * value: "info"
     * @const
     */
    info: "info",

    /**
     * value: "debug"
     * @const
     */
    debug: "debug",

    /**
     * value: "error"
     * @const
     */
    error: "error",

    /**
     * value: "trace"
     * @const
     */
    trace: "trace",

    /**
     * value: "warn"
     * @const
     */
    warn: "warn"
  };


  /**
   * Allowed values for the <code>objectUploaderOptionsSpEncryption</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderOptionsSpEncryptionEnum = {
    /**
     * value: "high"
     * @const
     */
    high: "high",

    /**
     * value: "none"
     * @const
     */
    none: "none"
  };


  /**
   * Allowed values for the <code>objectUploaderOptionsDeliveryMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderOptionsDeliveryModeEnum = {
    /**
     * value: "yes"
     * @const
     */
    yes: "yes",

    /**
     * value: "unsigned"
     * @const
     */
    unsigned: "unsigned",

    /**
     * value: "no"
     * @const
     */
    no: "no",

    /**
     * value: "fast"
     * @const
     */
    fast: "fast"
  };


  /**
   * Allowed values for the <code>objectUploaderSourceExcludeSubdirectories</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderSourceExcludeSubdirectoriesEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "All"
     * @const
     */
    all: "All",

    /**
     * value: "Specified"
     * @const
     */
    specified: "Specified"
  };


  /**
   * Allowed values for the <code>objectUploaderSourceFileReadinessCheckType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderSourceFileReadinessCheckTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Consecutive Seek"
     * @const
     */
    consecutiveSeek: "Consecutive Seek",

    /**
     * value: "MD5 Hash"
     * @const
     */
    mD5Hash: "MD5 Hash",

    /**
     * value: "Date/Time & Size"
     * @const
     */
    dateTimeSize: "Date/Time & Size"
  };


  /**
   * Allowed values for the <code>objectUploaderSourceSourceDeletionsAfterSuccessfulTransfer</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectUploaderSourceSourceDeletionsAfterSuccessfulTransferEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Transferred Files"
     * @const
     */
    transferredFiles: "Transferred Files",

    /**
     * value: "Empty Directories"
     * @const
     */
    emptyDirectories: "Empty Directories",

    /**
     * value: "Transferred Files and Empty Directories"
     * @const
     */
    transferredFilesAndEmptyDirectories: "Transferred Files and Empty Directories",

    /**
     * value: "Transferred Files and Directories"
     * @const
     */
    transferredFilesAndDirectories: "Transferred Files and Directories"
  };

  return exports;

}));