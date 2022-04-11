import * as sinon from 'sinon';
import * as chai from 'chai';
import RecordStoreModel from '../src/Models/RecordStore';
import RecordStoreService from '../src/Services/RecordStore';
import mongoose from 'mongoose';

const { expect } = chai;
const returnMock = [
  {
    "_id": "62534c2e640e26aadd061f53",
    "artist": "Ney Matogrosso",
    "title": "Novos Baianos",
    "format": "CD",
    "yearPublished": 1995,
    "new": false
  },
  {
    "_id": "62534c2e640e26aadd061f54",
    "artist": "Chico Buarque",
    "title": "Algum Disco",
    "format": "CD",
    "yearPublished": 2000,
    "new": true
  }
];
const recordStoreModel = new RecordStoreModel();
const service = new RecordStoreService(recordStoreModel);

describe('Testings for model layer', () => {
  describe('Testing getAll method', () => {
    before(async () => {
      sinon.stub(mongoose, 'connect').resolves();
      sinon.stub(recordStoreModel, 'getAll').resolves(returnMock);
    });
  
    after(async () => {
      (mongoose.connect as sinon.SinonStub).restore();
      (recordStoreModel.getAll as sinon.SinonStub).restore();
    });
  
    it('should return all records', async () => {
      const result = await service.getAll();
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
    });
  })

  describe('Testing getOne method', () => {
    before(async () => {
      sinon.stub(mongoose, 'connect').resolves();
      sinon.stub(recordStoreModel, 'getOne').resolves(returnMock[0]);
    });
  
    after(async () => {
      (mongoose.connect as sinon.SinonStub).restore();
      (recordStoreModel.getOne as sinon.SinonStub).restore();
    });
  
    it('should return one record', async () => {
      const result = await service.getOne(returnMock[0]._id);
      expect(result).to.be.an('object');
      expect(result).to.have.property('_id');
      expect(result).to.have.property('artist');
      expect(result).to.have.property('title');
      expect(result).to.have.property('format');
      expect(result).to.have.property('yearPublished');
      expect(result).to.have.property('new');
    });
  })

  describe('Testing create method', () => {
    before(async () => {
      sinon.stub(mongoose, 'connect').resolves();
      sinon.stub(recordStoreModel, 'create').resolves(returnMock[0]);
    });
  
    after(async () => {
      (mongoose.connect as sinon.SinonStub).restore();
      (recordStoreModel.create as sinon.SinonStub).restore();
    });
  
    it('should create a record', async () => {
      const result = await service.create(returnMock[0]);
      expect(result).to.be.an('object');
      expect(result).to.have.property('_id');
      expect(result).to.have.property('artist');
      expect(result).to.have.property('title');
      expect(result).to.have.property('format');
      expect(result).to.have.property('yearPublished');
      expect(result).to.have.property('new');
    });
  });
});
